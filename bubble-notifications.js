const infoBubbleContainer = document.getElementById('infoBubbleContainer');
function info(text) {
  const newBubble = document.createElement('div');
  newBubble.classList.add('infoBubble', 'pop-in');
  newBubble.innerText = text;
  infoBubbleContainer.appendChild(newBubble);
  setTimeout(()=>infoBubbleContainer.removeChild(newBubble),2500);
}
