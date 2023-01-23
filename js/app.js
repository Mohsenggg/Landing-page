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

const mainHeading = document.querySelector('.edit');
mainHeading.textContent = 'heyyyy​';

const navlist = document.getElementById("navbar__list");
navlist.creatElement('li');


// select the first (main) heading of the page
// add the <span> element as the last child element of the main heading

const newLi = document.createElement('li');
const navList = document.getElementById("navbar__list");
const addLi = navList.appendChild(newLi);
addLi.classList.add("my__list")


const newAnchor = document.createElement('a');
const listLine = document.querySelector(".my__list");
const addAnchor = listLine.appendChild(newAnchor);
addAnchor.classList.add("menu__link")



const anchorLine = document.querySelector(".menu__link");
anchorLine.insertAdjacentHTML('afterbegin', "section x");
anchorLine.setAttribute('href', '#section3');

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

let secText = sections.forEach(function(item){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let text = document.createTextNode(item);
    li.appendChild(a);
    a.classList.add("menu__link")
    a.setAttribute('href', secSelect(sections.length));
    a.appendChild(text);
    navList.appendChild(li);
});

let theList ="";
function secSelect(y){
    for(let x = 1; x <= y; x++){        
    }
    return  theList;
};
console.log(secSelect(sections.length));



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
