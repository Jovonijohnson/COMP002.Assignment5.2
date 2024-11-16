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

// Balloon functionality
const balloon = document.getElementById('balloon'); // Grabs the balloon element from the DOM
let size = 30; // This sets the initial size in pixels
balloon.style.fontSize = size + 'px'; // Apply the initial size to the balloon

function inflateBalloon() {
    size *= 1.1; // This increases the size by 10%
    updateBalloon(); // Updated the balloon with the new size
}

function deflateBalloon() {
    size *= 0.9; // This Decreases the size by 10%
    updateBalloon(); // Updated the balloon with the new size
}

function updateBalloon() {
    if (size > 300) { // This checks if the size exceeds the explosion threshold
        balloon.textContent = '💥'; // Change the emoji to explosion
        window.removeEventListener('keydown', handleKeyPress); // Removes the keypress event listener to stop further resizing
    } else {
        balloon.style.fontSize = size + 'px'; // Updates font size of the balloon
    }
}

function handleKeyPress(event) {
    if (event.key === 'ArrowUp') {
        inflateBalloon(); // This inflates the balloon when the up arrow key is pressed
        event.preventDefault(); // Prevents the default scrolling action
    } else if (event.key === 'ArrowDown') {
        deflateBalloon(); // Deflate the balloon when the down arrow key is pressed
        event.preventDefault(); // Prevents the default scrolling action
    }
}

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

window.addEventListener('keydown', handleKeyPress); // Adds an event listener to handle key press events

// Tab functionality
const tabs = document.querySelectorAll('#tabbed-contents > div'); // Selects all tab content divs
const tabLinks = document.querySelectorAll('#tabbed-layout ul li a'); // Selects all tab link elements

// Show only the first tab by default
tabs.forEach((tab, index) => { // Iterates over each tab element and its index
    tab.style.display = index === 0 ? 'block' : 'none'; // Displays the first tab and hides the others based on the index
});

// Add click event listeners to each tab link
tabLinks.forEach((link, index) => { // Iterates over each tab link element and its index
    link.addEventListener('click', function(event) { // Adds a click event listener to each tab link
        event.preventDefault(); // Prevents the default action of the link, which would be to navigate to a new page

        // Display the clicked tab and hide the others
        tabs.forEach((tab, tabIndex) => { // Iterates over each tab element and its index again
            tab.style.display = tabIndex === index ? 'block' : 'none'; // Displays the selected tab and hides the others
        });
    });
});
