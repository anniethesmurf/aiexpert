import '../styles.css';
import { bootSharedComponents } from './components.js';

bootSharedComponents();

const closePanel = trigger => {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  if (!panel) return;

  trigger.setAttribute('aria-expanded', 'false');
  panel.style.maxHeight = null;
  panel.setAttribute('hidden', '');
};

const openPanel = trigger => {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  if (!panel) return;

  document.querySelectorAll('[data-accordion-trigger][aria-expanded="true"]').forEach(openTrigger => {
    if (openTrigger !== trigger) closePanel(openTrigger);
  });

  trigger.setAttribute('aria-expanded', 'true');
  panel.removeAttribute('hidden');
  panel.style.maxHeight = `${panel.scrollHeight}px`;
};

const bootAccordions = () => {
  const triggers = document.querySelectorAll('[data-accordion-trigger]');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closePanel(trigger);
      } else {
        openPanel(trigger);
        const target = trigger.dataset.accordionTarget;
        if (target) history.replaceState(null, '', `#${target}`);
      }
    });
  });

  const initialTarget = window.location.hash.replace('#', '');
  if (initialTarget) {
    const trigger = document.querySelector(`[data-accordion-target="${initialTarget}"]`);
    if (trigger) openPanel(trigger);
  }
};

bootAccordions();

const bootModal = ({ openSelector, modalSelector, closeSelector }) => {
  const openButtons = document.querySelectorAll(openSelector);
  const modal = document.querySelector(modalSelector);
  const closeButton = document.querySelector(closeSelector);
  if (!openButtons.length || !modal || !closeButton) return;
  let activeOpenButton = openButtons[0];

  const openModal = openButton => {
    activeOpenButton = openButton;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  const closeModal = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    activeOpenButton.focus();
  };

  openButtons.forEach(openButton => {
    openButton.addEventListener('click', () => openModal(openButton));
  });
  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
};

const bootFrameworkModal = () => {
  bootModal({
    openSelector: '[data-framework-modal-open]',
    modalSelector: '[data-framework-modal]',
    closeSelector: '[data-framework-modal-close]'
  });
};

bootFrameworkModal();

const bootHeritageDiagramModal = () => {
  bootModal({
    openSelector: '[data-heritage-diagram-open]',
    modalSelector: '[data-heritage-diagram-modal]',
    closeSelector: '[data-heritage-diagram-close]'
  });
};

bootHeritageDiagramModal();

const bootOperationalModelModal = () => {
  bootModal({
    openSelector: '[data-operational-model-open]',
    modalSelector: '[data-operational-model-modal]',
    closeSelector: '[data-operational-model-close]'
  });
};

bootOperationalModelModal();

const bootCaseImageModal = () => {
  const modalImage = document.querySelector('[data-case-image-modal-img]');

  document.querySelectorAll('[data-case-image-open]').forEach(openButton => {
    openButton.addEventListener('click', () => {
      if (!modalImage) return;
      modalImage.src = openButton.dataset.fullSrc;
      modalImage.alt = openButton.dataset.fullAlt;
    });
  });

  bootModal({
    openSelector: '[data-case-image-open]',
    modalSelector: '[data-case-image-modal]',
    closeSelector: '[data-case-image-close]'
  });
};

bootCaseImageModal();

const bootIndustryMediaModal = () => {
  bootModal({
    openSelector: '[data-industry-media-open]',
    modalSelector: '[data-industry-media-modal]',
    closeSelector: '[data-industry-media-close]'
  });
};

bootIndustryMediaModal();

const bootCertificationImageModal = () => {
  bootModal({
    openSelector: '[data-certification-image-open]',
    modalSelector: '[data-certification-image-modal]',
    closeSelector: '[data-certification-image-close]'
  });
};

bootCertificationImageModal();
