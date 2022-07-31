(() => {
  const refs = {
    openModalBtn: document.querySelector("[big-menu--open]"),
    closeModalBtn: document.querySelector("[big-menu--close]"),
    modal: document.querySelector("[data-big-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();