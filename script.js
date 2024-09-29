// Select the button element by its ID
const button = document.getElementById('colorButton');

// Define an array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#FF33F0','#FF43F1'];

// Add an event listener to the button to change the background color
button.addEventListener('click', function() {
    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;

    
}
);