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

// document.getElementById("year").textContent = new Date().getFullYear();
//document.getElementById("year").textContent = ...;: Sets the content of the span to the current year.
//new Date().getFullYear();: Fetches the current year using JavaScript.

// Display today's date dynamically in the footer
document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("current-date");
  const today = new Date();
  dateElement.textContent = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // console.log("Bio Data Loaded Successfully");
});
/*
 This JavaScript code dynamically displays today's date in the footer of a webpage using a specific date format. Here's a detailed explanation:

 Code Breakdown:

1. `document.addEventListener("DOMContentLoaded", () => { ... });`:
   - This sets up an event listener that waits for the entire DOM (Document Object Model) of the webpage to load before running the code inside 
   the callback function.
   - It ensures that the script interacts with the webpage elements only after they are fully loaded and available.

2. `const dateElement = document.getElementById("current-date");`:
   - Retrieves the HTML element with the `id` **`current-date`** and assigns it to the `dateElement` variable.
   - This element is where the date will be displayed.

3. `const today = new Date();`:
   - Creates a new `Date` object representing the current date and time.

4. `today.toLocaleDateString("en-GB", { ... });`:
   - Converts the `today` date into a human-readable string in a localized format.
   - The `"en-GB"` locale is used, which corresponds to British English formatting.
   - The options object `{ day: "2-digit", month: "short", year: "numeric" }` specifies the desired format:
     - `day: "2-digit"`: Displays the day as a two-digit number (e.g., `07` for the 7th).
     - `month: "short"`: Displays a short, abbreviated name for the month (e.g., `Dec` for December).
     - `year: "numeric"`: Displays the full numeric year (e.g., `2024`).

   Example output: `07 Dec 2024`

5. `dateElement.textContent = ...;`:
   - Sets the `textContent` property of the `dateElement` (the HTML element retrieved earlier) to the formatted date string.
   - This updates the content of the HTML element dynamically.

6. `// console.log("Bio Data Loaded Successfully");`:
   - A commented-out line intended for debugging. If uncommented, it logs a success message to the browser console when the script runs.

 */
