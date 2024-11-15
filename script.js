// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
// Create the balloon element

const balloon = document.createElement('div');
balloon.id = 'balloon';
balloon.textContent = '🎈';
document.body.appendChild(balloon);
// Initial font size
let size = 30; // Initial size in pixels
balloon.style.fontSize = size + 'px';

// Inflate the balloon
function inflateBalloon() {
    size *= 1.1; // Increase size by 10%
    updateBalloon();
}

// Deflate the balloon
function deflateBalloon() {
    size *= 0.9; // Decrease size by 10%
    updateBalloon();
}
// Update balloon size and check for explosion
function updateBalloon() {
    if (size > 300) { // Explosion size threshold
        balloon.textContent = '💥'; // Change emoji to explosion
        window.removeEventListener('keydown', handleKeyPress);
    } else {
        balloon.style.fontSize = size + 'px';
    }
}
// Handle key press events
function handleKeyPress(event) {
    if (event.key === 'ArrowUp') {
        inflateBalloon();
        event.preventDefault(); // Prevents default action scrolling
    } else if (event.key === 'ArrowDown') {
        deflateBalloon();
        event.preventDefault();
    }
}
// Add keydown event listener
window.addEventListener('keydown', handleKeyPress);

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

// Initial setup to show only the first tab
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#tabbed-contents > div');
    tabs.forEach((tab, index) => {
        tab.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Created the tab links dynamically
    const tabLinks = ['Tab 1', 'Tab 2', 'Tab 3'];
    const nav = document.createElement('nav');
    tabLinks.forEach((linkText, index) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        link.dataset.tabIndex = index;
        nav.appendChild(link);
    });