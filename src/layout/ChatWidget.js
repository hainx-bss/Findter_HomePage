import { chatHtml } from './markup/chat.js';
import { mountChatComposer } from '../services/crisp.js';

export function renderChat() {
  return chatHtml;
}

export function mountChat() {
  mountChatComposer();
}
