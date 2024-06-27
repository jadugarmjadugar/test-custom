function scrollText(text) {
  const scrollingText = document.getElementById('scrolling-text');
  scrollingText.innerHTML = text;
  
  anime({
    targets: scrollingText,
    translateX: ['-100%', '100%'],
    duration: 5000,
    easing: 'linear',
    loop: true
  });
}

window.onload = function() {
  scrollText("hi this is amazon q");
}
