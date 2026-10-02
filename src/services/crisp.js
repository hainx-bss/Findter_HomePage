import { STORAGE_KEYS } from '../app/storageKeys.js';
import { emit } from '../app/bus.js';
import { escapeHtml } from '../utils/escape.js';
import { getAll, save } from './highlightStore.js';
import { markEnabled } from './advancedFeatures.js';
import { markThemePending, markThemeResolved, recordCrispRequest } from './themeCompat.js';

let trialFeedbackReplyUntil = 0;
let awaitingCollabCode = false;
let collabAskShown = false;
let themeAwaitingCode = null;

function chatEls() {
  return {
    bubble: document.getElementById('chat-bubble'),
    input: document.getElementById('chat-input'),
    messages: document.getElementById('chat-messages'),
    badge: document.getElementById('chat-badge'),
  };
}

export function openChat({ hideBadge = false } = {}) {
  const { bubble, badge } = chatEls();
  if (bubble) bubble.classList.add('active');
  if (hideBadge && badge) badge.classList.add('hidden');
}

export function closeChat() {
  const { bubble } = chatEls();
  if (bubble) bubble.classList.remove('active');
}

export function toggleChat() {
  const { bubble } = chatEls();
  if (bubble) bubble.classList.toggle('active');
}

export function isChatOpen() {
  const { bubble } = chatEls();
  return !!(bubble && bubble.classList.contains('active'));
}

export function setTrialFeedbackReplyWindow(msFromNow) {
  trialFeedbackReplyUntil = Date.now() + msFromNow;
}

export function addMessageToChat(text, isUser, options = {}) {
  const { messages } = chatEls();
  if (!messages) return;
  const safe = options.html ? text : escapeHtml(text);
  const div = document.createElement('div');
  div.className = 'flex gap-2 ' + (isUser ? 'justify-end' : '');
  if (isUser) {
    div.innerHTML = '<div class="bg-red-600 text-white rounded-lg rounded-tr-none px-3 py-2 text-[13px] max-w-[85%]">' + safe + '</div>';
  } else {
    div.innerHTML =
      '<div class="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">' +
        '<i class="fas fa-robot text-xs"></i>' +
      '</div>' +
      '<div class="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[13px] text-gray-700 max-w-[85%]">' + safe + '</div>';
  }
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

export function addChatChoicePrompt(text, choices) {
  const { messages } = chatEls();
  if (!messages) return;
  const div = document.createElement('div');
  div.className = 'flex gap-2';
  const buttonsHtml = choices.map((choice, i) => (
    '<button type="button" class="chat-choice-btn border border-gray-300 bg-white hover:bg-gray-50 text-[#303030] text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors" data-choice-index="' + i + '">' + escapeHtml(choice.label) + '</button>'
  )).join('');
  div.innerHTML =
    '<div class="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">' +
      '<i class="fas fa-robot text-xs"></i>' +
    '</div>' +
    '<div class="flex flex-col gap-2 max-w-[85%]">' +
      '<div class="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[13px] text-gray-700">' + escapeHtml(text) + '</div>' +
      '<div class="flex flex-wrap gap-2">' + buttonsHtml + '</div>' +
    '</div>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  const btnEls = div.querySelectorAll('.chat-choice-btn');
  btnEls.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btnEls.forEach((item) => {
        item.disabled = true;
        item.classList.add('opacity-50', 'cursor-not-allowed');
      });
      btn.classList.remove('opacity-50');
      btn.classList.add('bg-[#303030]', 'text-white', 'border-[#303030]');
      choices[i].onClick();
    });
  });
}

export function requestEnableFeatureChat(item, onEnabled) {
  if (!item) return;
  const name = item.name;
  openChat({ hideBadge: true });
  addMessageToChat('Please confirm you want to enable this ' + name + '.', false);
  setTimeout(() => {
    addChatChoicePrompt('Enable ' + name + '?', [
      {
        label: 'Yes, enable it',
        onClick() {
          setTimeout(() => {
            addMessageToChat('Great! Please give me a moment while I activate ' + name + ' on your account.', false);
            setTimeout(() => {
              if (item.advancedFeatureId != null) {
                markEnabled(item.advancedFeatureId);
              } else {
                const items = getAll();
                const target = items.filter((entry) => entry.code === item.code)[0];
                if (target) {
                  target.unlocked = true;
                  target.active = true;
                  save(items);
                }
              }
              addMessageToChat('Great news! ' + name + ' has been successfully enabled!', false);
              setTimeout(() => {
                addMessageToChat("You can now use this feature immediately. Enjoy!", false);
                if (onEnabled) onEnabled();
              }, 900);
            }, 1200);
          }, 500);
        },
      },
      {
        label: 'No, thanks',
        onClick() {
          setTimeout(() => {
            addMessageToChat("No problem! We won't enable " + name + " for now. You can always come back and enable it whenever you're ready.", false);
            setTimeout(() => {
              addMessageToChat('May I know if the app meet your expectation so far?', false);
            }, 900);
          }, 500);
        },
      },
    ]);
  }, 500);
}

export function isFourDigitCollabCode(msg) {
  const digitGroups = msg.match(/\d+/g) || [];
  return digitGroups.length === 1 && digitGroups[0].length === 4;
}

export function sendThemeCompatibilityRequest(theme) {
  markThemePending(theme);
  recordCrispRequest(theme);
  emit('themes:changed');
  openChat({ hideBadge: true });
  addMessageToChat("Hi! I'd love to use Findter with the " + theme + " theme, could you help make it compatible?", true);
  let agentHtml = "We've received your request to support the " + escapeHtml(theme) + " theme.";
  const codeAlreadyReceived = localStorage.getItem(STORAGE_KEYS.COLLAB_CODE_RECEIVED) === 'true';
  if (!collabAskShown && !codeAlreadyReceived) {
    collabAskShown = true;
    awaitingCollabCode = true;
    agentHtml += "<br><br>To proceed, please send us your collaborator code. You can find it by going to:<br>" +
      "Shopify Admin &rarr; Settings &rarr; Users and permissions &rarr; Security &rarr; Store security &rarr; Collaborators &mdash; your code will be displayed there.<br><br>" +
      "Once we receive your code, we&rsquo;ll send a collaboration request. Please grant us access when it arrives.<br><br>" +
      "For your safety, we will duplicate your live theme and apply all fixes to the duplicated version, ensuring your live store remains unaffected";
  }
  setTimeout(() => {
    addMessageToChat(agentHtml, false, { html: true });
  }, 800);
  themeAwaitingCode = theme;
}

function handleOutgoingMessage(msg) {
  addMessageToChat(msg, true);
  if (isFourDigitCollabCode(msg) && themeAwaitingCode) {
    const confirmedTheme = themeAwaitingCode;
    themeAwaitingCode = null;
    awaitingCollabCode = false;
    localStorage.setItem(STORAGE_KEYS.COLLAB_CODE_RECEIVED, 'true');
    setTimeout(() => {
      addMessageToChat("Thanks for providing the information. Our team has received your request and will get back to you as soon as possible.", false);
    }, 700);
    setTimeout(() => {
      markThemeResolved(confirmedTheme);
      emit('themes:changed');
      addMessageToChat("Good news! " + confirmedTheme + " is now compatible with Findter, you're all set to select it.", false);
    }, 4000);
    return;
  }
  if (awaitingCollabCode) {
    setTimeout(() => {
      addMessageToChat("Please check your code again. It needs to be 4 digits.", false);
    }, 700);
    return;
  }
  if (trialFeedbackReplyUntil && Date.now() <= trialFeedbackReplyUntil) {
    trialFeedbackReplyUntil = 0;
    setTimeout(() => {
      addMessageToChat("Thanks for reaching out! 😊 We've received your message and our team is already on it, we'll get back to you as soon as possible.", false);
    }, 700);
    return;
  }
  setTimeout(() => { addMessageToChat("Thank you! We'll respond soon.", false); }, 600);
}

export function mountChatComposer() {
  const sendBtn = document.getElementById('send-chat-btn');
  const input = document.getElementById('chat-input');
  const floating = document.getElementById('floating-chat-btn');
  const closeBtn = document.getElementById('close-chat-bubble');
  if (floating) floating.addEventListener('click', () => toggleChat());
  if (closeBtn) closeBtn.addEventListener('click', () => closeChat());
  if (!sendBtn || !input) return;
  sendBtn.addEventListener('click', () => {
    const msg = input.value.trim();
    if (!msg) return;
    input.value = '';
    handleOutgoingMessage(msg);
  });
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
  });
}
