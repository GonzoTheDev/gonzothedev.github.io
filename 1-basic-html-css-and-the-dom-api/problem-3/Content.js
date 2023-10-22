
// Save the original DOM state
let defaultDomState = document.body.innerHTML;

// Function to reset the DOM to the original state
function resetDOM() {
    document.body.innerHTML = defaultDomState;
}


//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}

// Set a 5 second timeout before running the remodelPage function
setTimeout(remodelPage, 5000);

// Function to remodel the page
function remodelPage() {

// Clear the page
document.body.innerHTML = '';

// Create a new image element
var newImg = document.createElement("img");

// Set the src attribute to the image we want
newImg.src = "https://i.pinimg.com/736x/e7/44/4e/e7444e27f41a64765d832ca662e793f2.jpg";

// Create a new div element
var newDiv = document.createElement("div");

// Append the new div to the body
document.body.appendChild(newDiv);

// Append the new image to the new div
newDiv.appendChild(newImg);

// Style and centre the new div
newDiv.style.margin = "auto";
newDiv.style.width = "50%";
newDiv.style.textAlign = "center";
newDiv.style.padding = "10px";

// Create and define a reset button element
var resetButton = document.createElement("button");
resetButton.innerText = "Reset Page";
resetButton.id = "resetButton";

// Append the reset button to the new div
newDiv.appendChild(resetButton);

// Add an event listener to the reset button to reset the DOM onclick
resetButton.onclick = resetDOM;

}

