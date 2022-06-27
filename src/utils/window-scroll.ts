export const disableScroll = () => {
  window.document.body.style.position = 'fixed';
  window.document.body.style.top = '0';
  window.document.body.style.right = '0';
  window.document.body.style.bottom = '0';
  window.document.body.style.left = '0';
  window.document.body.style.height = '100vh';
  window.document.body.style.overflowY = 'scroll';
};

export const enableScroll = () => {
  window.document.body.style.removeProperty('position');
  window.document.body.style.removeProperty('top');
  window.document.body.style.removeProperty('right');
  window.document.body.style.removeProperty('bottom');
  window.document.body.style.removeProperty('left');
  window.document.body.style.removeProperty('height');
  window.document.body.style.removeProperty('overflowY');
};
