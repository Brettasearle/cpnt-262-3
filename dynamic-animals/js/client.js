// import animals module
import {animals} from "./animals.js";
console.log("hello");



// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = "";

// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.

const gallery = document.querySelector(".gallery");
     

// Loop through `animals` array using `array.forEach()`. 
animals.forEach(function(animal) {
  console.log(animal)
  outputHTML += `<figure class="card">
  <img src="${animal.imgPath()}.jpg" alt="Lorem Picsum: ${animal.title}">
  <figcaption>${animal.credit}</figcaption>
  </figure>`;
  gallery.innerHTML = outputHTML;
});

//Add a polyfill for append support with IE not sure how to do this and dont really wanna break anything but I realize its needed to work for internet explorer.






  // For each image ID, 
  // 1. create an image card for each image that includes:
  //      - a `<figure class="card">` container
  //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
  //      - a `<figcaption>` element containing photo credit and link to Unsplash source


  // 2. append the `<figure>` card to the `outputHTML` variable you created earlier


// Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.


