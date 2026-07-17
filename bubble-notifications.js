const BN = class BN {
  static infoBubbleContainer = null;

  static init() {
    let container = document.getElementById("infoBubbleContainer");
    if (!container && document.body) {
      container = document.createElement("div");
      container.id = "infoBubbleContainer";
      document.body.appendChild(container);
    }
    if (container) {
      container.setAttribute("role", "status");
      container.setAttribute("aria-live", "polite");
    }
    this.infoBubbleContainer = container;
    return container;
  }

  static info(text, duration = 2500) {
    if (!this.infoBubbleContainer) this.init();
    if (!this.infoBubbleContainer) {
      return console.error("bubble-notifications: document.body not available yet — call BN.info() after the DOM is ready");
    }
    const newBubble = document.createElement("div");
    newBubble.classList.add("infoBubble", "pop-in");
    newBubble.innerText = text;
    newBubble.style.animationDuration = duration + "ms";
    this.infoBubbleContainer.appendChild(newBubble);
    setTimeout(() => newBubble.remove(), duration);
  }
};

export { BN };
