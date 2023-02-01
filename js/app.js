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
const mainHead = document.querySelector("main");
    // add the <section> element as the last child element of the main heading
    const content = `<section id="section4" data-nav="Section 4">
    <div class="landing__container">
    <h2>Section 4</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    // Add section 4 as a last child of main element 
    mainHead.insertAdjacentHTML("beforeend", content);

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

// Select all the 4 sections of the page 
const sections = document.querySelectorAll('section')
const activeAnch = document.querySelectorAll(".menu__link")
// Function to add active animation to each section when it appear.  
function makeActive(){
    // Add for of loop to add active class to each section in viweport.  
    sections.forEach((section, i)=>{
        // Add variable to get the section in viewport.
    const sectionView = section.getBoundingClientRect();
    //>> Find a value that works best, but 150 seems to be a good start.
    //apply active state on current section and corresponding Nav link.
    if (sectionView.top <= 150 && sectionView.bottom >= 150 ) {
        section.classList.add("active");
        activeAnch[i].classList.add("activeNav");
    //Remove active state from other section and corresponding Nav link.
    } else {
        section.classList.remove("active");
        activeAnch[i].classList.remove("activeNav");
    }})}
    // Call the makeActive() function whenever the user scrolls the page. Make sections active.
    document.addEventListener("scroll", (event)=> { makeActive();});



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
