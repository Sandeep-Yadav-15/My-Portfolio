// Initialize the Typed.js instance with improved settings
const typed = new Typed('#element', {
    strings: Array(10).fill('Full-Stack Developer.'), // Fills the array with 20 instances of the same string
    typeSpeed: 60, // Speed of typing
    backSpeed: 60, // Speed of deleting
    // backDelay: 1000, // Delay before starting to delete
    // startDelay: 1000, // Adds a slight delay before typing starts (optional)
    loop: true, // Loop the animation infinitely
    loopCount: Infinity, // Ensures looping continues indefinitely
    showCursor: true, // Shows the blinking cursor at the end of the text
    cursorChar: '|', // Sets the character for the cursor
    autoInsertCss: true, // Automatically injects required CSS for the cursor (optional)
});


  function toggleMenu() {
    /*The toggleMenu() function toggles the visibility of the mobile menu and animates the hamburger icon to transform into an "X" when the menu is open.*/ 
    // Select the mobile menu and hamburger icon elements
    const menu = document.querySelector('.mobile-menu');
    /*document basically using a inbuilt system in js that we are going to target element of our web page basically be using the element*/
    const icon = document.querySelector('.hamburger-icon');

    // Toggle the 'active' class to show/hide the menu
    menu.classList.toggle('active');
    /*- classList is a property of the element that returns a DOMTokenList object which contains the
    - class names of the element
    - toggle() method is a method of the DOMTokenList object that toggles the presence of a class name in the list.
    -  If the class name is already present in the list,
    - it is removed, otherwise it is added.*/
    
    // Toggle the 'active' class to animate the hamburger icon
    icon.classList.toggle('active');
}

document.getElementById("year").textContent = new Date().getFullYear();
//document.getElementById("year").textContent = ...;: Sets the content of the span to the current year.
//new Date().getFullYear();: Fetches the current year using JavaScript.
