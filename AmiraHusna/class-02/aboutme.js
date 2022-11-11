// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
let body =  document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
let firstItem = document.querySelector("li span#nickname");
// var firstItem = document.getElementById("nickname");
firstItem.innerHTML = "Amira Husna";
let secondItem = document.querySelector("li span#favorites");
// var secondItem = document.getElementById("favorites");
secondItem.innerHTML = "Painting";
let thirdItem = document.querySelector("li span#hometown");
// let thirdItem = document.querySelector("hometown");
thirdItem.innerHTML = "Johor";

// Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color "red".
let allListItems = document.querySelectorAll("li");
for(let i = 0; i < allListItems.length; i++){
    allListItems[i].className = "list-item";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
let img = document.createElement("img");
img.src = "C:\\Users\\amirahusna\\Pictures\\Photo_me.JPG";
img.style.width = "300px";
img.style.height = "300px";
document.body.appendChild(img);

