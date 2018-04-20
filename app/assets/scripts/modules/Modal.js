import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key press
    $(document).keyup(this.keyPressHandler.bind(this));


  }

  keyPressHandler(e) {
    // 'esc' -> 27
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false; //takes care of default behavior of browser automatically scrolling up
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
