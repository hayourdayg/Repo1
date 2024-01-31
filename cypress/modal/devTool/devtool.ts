class DevToolModal extends ModalBase {
  selectEnvironment(
    environment:
      | "Switch to I3F"
      | "Switch to T1I"
      | "Switch to T3I"
      | "Switch to T2I"
  ) {
    this.modalContent.find("button").then(($el) => {
      if ($el.text() == environment) {
        $el.trigger("click");
      }
    });
  }
}

export const devToolModal = new DevToolModal();
