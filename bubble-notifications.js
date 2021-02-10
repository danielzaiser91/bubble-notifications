const BN = class {
  infoBubbleContainer = null;

  static init() {
    this.infoBubbleContainer = document.getElementById("infoBubbleContainer");
  }

  static info(text) {
    if (!this.infoBubbleContainer) {
      return console.error("initialize notifications with BN.init() first");
    }
    const newBubble = document.createElement("div");
    newBubble.classList.add("infoBubble", "pop-in");
    newBubble.innerText = text;
    this.infoBubbleContainer.appendChild(newBubble);
    setTimeout(() => this.infoBubbleContainer.removeChild(newBubble), 2500);
  }
};

export { BN };
