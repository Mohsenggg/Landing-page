/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// select the first (main) heading of the page
// add the <span> element as the last child element of the main heading


const navList = document.getElementById("navbar__list");
let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
let num = 1;

let secText = sections.forEach(function(item){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let text = document.createTextNode(item);
    li.appendChild(a);
    a.classList.add("menu__link")
    a.setAttribute('href', "#section" + num++);
    a.appendChild(text);
    navList.appendChild(li);
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
