import { closeChat, isChatOpen } from '../services/crisp.js';
import { closeFeedbackModal, isFeedbackModalOpen } from './Feedback.js';
import { canDismissEditorModal, closeEditorModal, isEditorModalOpen } from './EnableEmbed.js';
import { closeRestrictedModalAndGoHome, isRestrictedModalOpen } from './AccessRestricted.js';
import { closeThemePickerModal } from './ThemePicker.js';
import { dismissWelcomeGate, isWelcomeGateOpen } from './WelcomeGate.js';
import { isModalOpen } from './modal.js';

export function mountKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (isWelcomeGateOpen()) {
      dismissWelcomeGate('esc');
      return;
    }
    if (isChatOpen()) {
      closeChat();
      return;
    }
    if (isRestrictedModalOpen()) {
      closeRestrictedModalAndGoHome();
      return;
    }
    if (isModalOpen(document.getElementById('theme-picker-modal'))) closeThemePickerModal();
    if (isEditorModalOpen() && canDismissEditorModal()) closeEditorModal();
    if (isFeedbackModalOpen()) closeFeedbackModal();
  });
}
