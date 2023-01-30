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
 * Comments should be present at the beginning of each active.
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


// let counter = 0;
// const createSection = () => {
//   counter++;
//   const content = `<section id="section${counter}" data-nav="Section ${counter}">
//     active="landing__container">
//     <h2>Section ${counter}</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
//     <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
//     </div>
//     </section>`;
//   document.querySelector("main").insertAdjacentHTML("beforeend", content);
// };





// first step >> get the location nav list by id.
const navList = document.getElementById("navbar__list");
// build an array that contains the title of each section.   
const sectionHeads = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
// set a variable that will be incremented to give section numbers.
let num = 1;
// Main function that loop over each item in sectionHeads array.
sectionHeads.forEach(function(item){
    // set variable that assign section's title items as an element text.
    let text = document.createTextNode(item);
    // create list element for each sectionHeads.  
    let navLi = document.createElement("li");
    // creat anchor for each list Element.
    let liAnchor = document.createElement("a");
    // add style to the anchor by linking it active.
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



const sections = document.querySelectorAll('section');
function makeActive(){
    for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150 ) {
        section.classList.add("active", "menu__link");
    //apply active state on current section and corresponding Nav link
    } else {
        section.classList.remove("active");
    //Remove active state from other section and corresponding Nav link
    }
    }
    }
    // Call the makeActive() function whenever the user scrolls the page.
    // Make sections active
    document.addEventListener("scroll", (event)=> { makeActive();});

// -----------------------------------------------
// this code down .. from https://github.com/Mohammed-Nasif/Udacity-Landing-Page-Project
// helped me to fix issues with my makeActive function 

// const sections = document.querySelectorAll('section');
// function makeActive (){

//     sections.forEach((section)=>{
//         const sectionView = section.getBoundingClientRect();
//         if (sectionView.top <= 150 && sectionView.bottom >= 150){
//             section.classList.add("active");
//         } else{
//             section.classList.remove("active");
//         }
//     })
// }

// window.addEventListener('scroll',(event)=>{
//     makeActive();
// })

// --------------------------------------------------------



// // let sections = document.querySelectorAll(`[data-nav=${active.id}]`)
// // let section = document.querySelectorAll("section");

// function makeActive(){
//     for (const section of sections) {
//     const box = section.getBoundingClientRect();
//     //Find a value that works best, but 150 seems to be a good start.
//     if (box.top <= 150 && box.bottom >= 150;) {
//         section.target.classList.add("active")
//     //apply active state on current section and corresponding Nav link
//     } else {
//         section.target.classList.remove("active")
//     //Remove active state from other section and corresponding Nav link
//     }
//     }
//     }
//     // Call the makeActive() function whenever the user scrolls the page.
//     // Make sections active
//     document.addEventListener("scroll", function() { makeActive();});



// const dood = ["Section 1", "Section 2", "Section 3", "Section 4"];

// for (const element of dood) {
//     console.log(element);
// }


// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }


// active 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
