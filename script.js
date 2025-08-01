// Initialize the Typed.js instance with improved settings
const typed = new Typed('#element', {
    // strings: Array(10).fill('Full-Stack Developer.'), // Fills the array with 20 instances of the same string
    strings: ['Full-Stack Developer', 'MERN Stack Developer', 'Web Enthusiast', 'Web Application'],
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

  console.log("Bio Data Loaded Successfully");
});


// Dark / light mode

/*here we creating a constant two button one for the nav menu in the hamburger and one
in the desktop*/
/*so we goona target a element by id  beacuse this is button has id modeToggle and another
one has id modeToggle2 Desktop*/
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
/*That now we have gotten a hold of both our two buton*/

const themeIcons = document.querySelectorAll(".icon");
/*Here we are selecting all the icons that have the class icon*/

/* we goona create a constant current theme that is going to keep track of which
theme ae are on and save theme in local storage bascically in my browser so whenever a
uer goes to visit this website in there local storage you can save things like which theme
is the preferred theme so if we change our theme to dark mode adn reload the page or come back
to the website it will still be in dark mode so that we are creating this local storage */
const currentTheme = localStorage.getItem("theme");
/*Here we are getting the theme from local storage and saving it in the currentTheme
 constant basically saving in this theme property in local storage*/

/*And then the first thing we're goona check if we have been visiting this website before we're goona have property that is cureent  theme*/ 
if (currentTheme === "dark") {
  setDarkMode();
}
/*If we have been visiting this website before and we have a property in local storage that is dark then we are goona call the function setDarkMode()
so that is a function in intself we haven't made that function yet it doesn't exist but it's similar to this toggle menu function toggle menu thats the name*/ 
 /*and now we are calling this function inside of here setDarkMode(); if the theme is dark but how do we actually change to the darkmode in the first place well this is where
 click events come inot picture the same way we have a click event here you see  menu.classList.toggle('active'); we are using a click event here it is only being use in the
  html file in our hamburger nav here we see  afe calling onclick = "toogleMenu()" here so insted of calling in the html like we re doing here we're going to call it inside
  of the javascript so we are goona target  button where we have button one and button two */
btn.addEventListener("click", function () {
  setTheme();
});
/*Here we are adding an event listener to the button that is modeToggle and when we click on that button we are goona call the function setTheme();*/

/*And now we are goona do the same thing with the other button that is modeToggle2
so we are goona add an event listener to that button and when we click on that button we
are goona call the function setTheme();*/
btn2.addEventListener("click", function () {
  setTheme();
});
/*Here we are adding an event listener to the button that is modeToggle2 and when we click
on that button we are goona call the function setTheme();*/

/*And now we are goona define the function setTheme();*/

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");
  /*Here we are getting the current theme of the body of the document basically the whole page*/

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
  /*Here we are checking if the current theme is dark if it is then we are goonacall the function setLightMode();
   otherwise we are goona call the function setDarkMode();*/
}
/*Here we are defining the function setTheme();*/

/*And now we are goona define the function setDarkMode();*/
function setDarkMode() {
  document.body.setAttribute("theme", "dark");/*this mean that when we are calling the Set Dark mode we are sying the theme ix going to be dark
  so we are setting the theme to dark*/
  localStorage.setItem("theme", "dark");
  /*Here we are setting the theme of the body of the document to dark and we are also
  saving it in the local storage*/

  themeIcons.forEach((icon) => {/*here we goona says when we are in the dark mode for each of those icon we are goona call another function*/ 
    icon.src = icon.getAttribute("src-dark");
    /*Here we are getting the src of the icon and we are replacing it with the src-dark
    so we are changing the icon to the dark mode icon*/
  });
  /*Here we are looping through the themeIcons array and we are changing the src of each icon
  to the src-dark*/
}
/*Here we are defining the function setDarkMode();*/
/*And now we are goona define the function setLightMode();*/
function setLightMode() {
  document.body.removeAttribute("theme");
  /*Here we are removing the theme attribute from the body of the document so we are
  basically saying that the theme is not set*/
  localStorage.setItem("theme", "light");
  /*Here we are saving the theme in the local storage and we are saying that the theme is
  light*/

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
  /*Here we are looping through the themeIcons array and we are changing the src of each icon
  to the src-light*/
}


// I'll use IntersectionObserver to detect when sections enter the viewport and apply the fade-in effect.
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
  /*The threshold property specifies the percentage of the target's visibility that should trigger the observer's callback.
  - A threshold of 0.1 means the callback will be triggered when 10% of the target is visible in the viewport.
  - You can adjust this value to control when the fade-in effect occurs.
  - For example, a threshold of 0.5 would trigger the callback when 50% of the target is visible.
  - You can also provide an array of values to create multiple thresholds.
  - For example, [0, 0.5, 1] would trigger the callback at 0%, 50%, and 100% visibility.
  */
  );

  fadeInElements.forEach(element => observer.observe(element));
});




