document.querySelectorAll('.item-servicios').forEach(div => {
  div.addEventListener('click', () => {
    const modalId = div.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('dialog');
  modals.forEach(modal => {
    if (modal.open && event.target === modal) {
      modal.close();
    }
  });
});
