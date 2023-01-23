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


select the first (main) heading of the page
add the <span> element as the last child element of the main heading
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



// The code above is the ice tip based on unseen tons of tries down :)


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


let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
let theList ="";
function secSelect(y){
    for(let x = 1; x <= y; x++){        
    }
    return  theList;
};
console.log(secSelect(sections.length));

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
// let theList ="";
function secSelect(y){
    for(let x = 1; x <= y; x++){
        return x;
    };
    return '#section' + x;
};
console.log(secSelect(sections.length));

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
let theList ="";

function secSelect(y){
    for(let x = 1; x <= y; x++){
        return '#section' + x;
    };
};
console.log(secSelect(sections.length));

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
let theList ="";
let secNum = sections.length;
function secSelect(y){
    for(let x = 1; x <= y; x++){
        theList = theList + '#section' + x;
         a = document.createElement("a");
         a.setAttribute('href' + theList);
        hey = document.appendChild(a);
    };
    return hey;
};
let addSecId = secSelect(secNum);
console.log(addSecId);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
let theList ="";
let secNum = sections.length;
function secSelect(y){
    for(let x = 1; x <= y; x++){
        theList = theList + '#section' + x;
    };
    return theList;
};
let addSecId = secSelect(secNum);
console.log(addSecId);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function listItem(item){
    for (var i = 0; i < item.array.length; i++){
      var list = item.array[i];
      
      list = document.createElement('li');
      document.getElementByClass('box').appendChild(list);
      
      console.log(list);
    }  
   }

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let tooot = document.createElement('li');

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

let secText = sections.forEach(function(item){
    let a = document.createElement("a");
    let text = document.createTextNode(item);
    tooot.appendChild(a);
    a.appendChild(text);
    navList.appendChild(a);
});

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

let secText = sections.forEach(function(item){
    anchorLine.insertAdjacentHTML('afterbegin', item);

});


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

sections.forEach(function(item){
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    // document.getElementById("navbar__list").appendChild(li);
    navList.appendChild(li);
});

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     
let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

function listItem(item){
    for (var i = 0; i < item.sections.length; i++){
      var list = item.sections[i];
            list = document.createElement('li');
      navList.appendChild(list);
    }  
   }

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");

sections.forEach(function(item){
    let text = document.createTextNode(item)
    newLi.appendChild(text);
    // navList.appendChild(newLi); 
});




// >>>>>>>> both array are working 

// let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
// let say = "say";
// sections.forEach(myFunction);
// function myFunction(item){
//     let out = say + item;
//     console.log(out);
// };

// let sections = new Array ("Section 1", "Section 2", "Section 3", "Section 4");
// sections.forEach(element => console.log(element));

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

section.forEach(function(item){
    let text = document.createTextNode(item)
    newLi.appendChild(text);
    navList.appendChild(newLi); 
});

// add for each and add elements and child 
// look for pic ssssssrx ... see you 

const creatList = function(y){
    const newLi = document.createElement('li');
    const navList = document.getElementById("navbar__list");
    navList.appendChild(newLi);
    const newAnchor = document.createElement('a');
    const navAnchor = navList.appendChild(newAnchor);

    for (let x = 0 ; x <= y ; x++) {
        navAnchor.setAttribute('href', '#section'+x);
    } 
    return mm; 
};

console.log(creatList(5));

function listItem(item){
    for (var i = 0; i < item.array.length; i++){
      var list = item.array[i];
      
      list = document.createElement('li');
      document.getElementByClass('box').appendChild(list);
      
      console.log(list);
    }  
   }

   build arry 
   build element ny arry items 

   let theList = "" ; 

   function creatList(y){
       let theList = ""; 
       const newLi = document.createElement('li');
       for (let x = 1 ; x <= y ; x++) {
           theList = theList +  '#section' + x ;    
       }
       return newLi.setAttribute('href',theList); 
   };
   
   console.log(creatList(5));
   
   const newLi = document.createElement('li');
   newLi;
   
function creatList(y){
    let theList = ""; 
    const newLi = document.createElement('li');
    for (let x = 1 ; x <= y ; x++) {
        theList = theList +  '#section' + x ;
    }
    return theList; 
};

console.log(creatList(4));


for (var i = 0; i < 6; i = i + 1) {
    console.log(document.createElement('li') + i);
  }


var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage = catMessage + "meow ";
    }
    return catMessage;
  };
  
console.log(catSays(5)) ;


build an arry by function ["section1","section2" ...]

or build a function that 


>>>>>>>> making array by function 
let mm = '' ; 
function laugh(y) {
    for (let x = 0 ; x < y ; x++) {
        mm = mm + '"' + 'section ' + x + '", ';
          
    }
    return mm; 
}
const lllist = new Array(laugh(5));
console.log(lllist);

output >> ['"section 0", "section 1", "section 2", "section 3", "section 4", ']
this is not desirable output i will chane 
the idea of making array by function 

>>>>>> yes!!! great job this way is working 
const htmlTextToAdd = '<a href="#section4" class="menu__link">Section 4</a>';
listLine.insertAdjacentHTML('afterbegin', htmlTextToAdd);


try this code >> failed :(

let data = ["section1", "section2", "section3"];
let list = document.getElementById("navbar__list");
data.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
});


const navList = document.querySelector(.navbar__list)
const newLi = document.createElement('li')
const newAnchor = navList.newLi.createElement('a')
// const anchorClass = newAnchor.add()
// const anchorClass = newAnchor.style.cssText = 'color: red;

const anchorClass = newAnchor.classList.add()

// tomorrow 

// 1- try to ensure that js file has control on html and CSS
//  and this by playing some page styles 

// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

const newHead = document.createElement('h2');
const navList = document.querySelector('.main__hero');
navList.appendChild(NewHead);

// newHead.textContent = 'Hi Mooohsen';

const editc = document.querySelector('.edit');
editc.appendChild('a');

function addCode() {
    document.getElementById("section1").innerHTML +=
    "<h3>This is the text which has been inserted by JS</h3>";
}

console.log(addCode);

const h1 = document.createElement("h1");
h1.innerHTML = "hey man";
document.body.append(h1);


const underline = document.createElement("a");
underline.innerText = "heey man";
h1.append(underline);


 2- creat function with a loop that give me 4 sentences like 
  herf =""
  https://www.tutorialspoint.com/how-to-create-html-list-from-javascript-array

Build menu 

Scroll to section on link click

Set sections as active

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}


let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

for (var x = 5; x < 10; x++) {
    var sec = "sec" + x;
    console.log(x);
}

var say = function(){for (var x = 5; x < 10; x++) {
    var sec = "sec" + x;
    return sec;
}};
console.log(say);

function buildNav (){
};



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
