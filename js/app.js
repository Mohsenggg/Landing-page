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


// first step >> get the location nav list by id.
const navList = document.getElementById("navbar__list");
// build an array that contains the title of each section.   
const sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
// set a variable that will be incremented to give section numbers.
let num = 1;
// Main function that loop over each item in sections array.
sections.forEach(function(item){
    // set variable that assign section's title items as an element text.
    let text = document.createTextNode(item);
    // create list element for each sections.  
    let navLi = document.createElement("li");
    // creat anchor for each list Element.
    let liAnchor = document.createElement("a");
    // add style to the anchor by linking it with css class.
    liAnchor.classList.add("menu__link")
    // link the anchor with each section id by herf attribute.
    liAnchor.setAttribute('href', "#section" + num++);
    // add titles text to anchor element.  
    liAnchor.appendChild(text);
    // insert the anchor element into list element.
    navLi.appendChild(liAnchor);
    // add li elements to html body as a child of nav element.
    navList.appendChild(navLi);
});


// Add class 'active' to section when near top of viewport

const cards = document.querySelectorAll(".activeHere")
// let target = document.querySelector(".main__hero");

const observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
    
            entry.target.classList.add("Active", entry.isIntersecting)
        })
    },
        {
            threshold: 1,
        }
    )  
cards.forEach(activeHere => {
   observer.observe(activeHere);
})


const Hi = document.querySelectorAll(".activeHere")
// let target = document.querySelector(".main__hero");


const observer = new IntersectionObserver(entries => {
    entries.forEach(section => {
        if(entries[0]['isIntersecting'] === true) {
            if(entries[0]['intersectionRatio'] > 0.5)
            document.querySelector(".activeHere").classList.add("Active")
        }
            else document.querySelector(".activeHere").classList.remove("Active")

    }, { threshold: [0.5]});  

Hi.forEach(activeHere => {
   observer.observe(activeHere);
})



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
