const BN = class {
  infoBubbleContainer = null;

  init() {
    infoBubbleContainer = document.getElementById('infoBubbleContainer');
  }

  info(text) {
    const newBubble = document.createElement('div');
    newBubble.classList.add('infoBubble', 'pop-in');
    newBubble.innerText = text;
    infoBubbleContainer.appendChild(newBubble);
    setTimeout(() => infoBubbleContainer.removeChild(newBubble), 2500);
  }
}

export {
  BN
};
