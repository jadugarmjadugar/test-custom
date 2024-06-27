const scrollText = require('../scripts/scrollingText');

describe('scrollText', () => {
  test('displays scrolling text on the page', () => {
    document.body.innerHTML = '<div id="scrolling-text"></div>';
    scrollText("hi this is amazon q");
    const scrollingText = document.getElementById('scrolling-text');
    expect(scrollingText.innerHTML).toBe("hi this is amazon q"); 
  });

  test('handles empty string input', () => {
    document.body.innerHTML = '<div id="scrolling-text"></div>';
    scrollText("");
    const scrollingText = document.getElementById('scrolling-text');
    expect(scrollingText.innerHTML).toBe("");
  });

  test('handles very long string input', () => {
    document.body.innerHTML = '<div id="scrolling-text"></div>';
    const longText = "A very long string. ".repeat(100);
    scrollText(longText);
    const scrollingText = document.getElementById('scrolling-text'); 
    expect(scrollingText.innerHTML).toBe(longText);
  });
});
