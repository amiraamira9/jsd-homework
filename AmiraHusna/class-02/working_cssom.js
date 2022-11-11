// Exercises: Working with the CSSOM
// Replace the Logo
// Visit Google's website in Chrome, and open up the console.

// Find the Google logo and store it in a variable using DOM traversal
let image = document.querySelector(".k1zIA.rSk4se .lnXdpd");

// Save the current src attribute into a variable
let imgSrc = image.src;

// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
image.srcset = "https://www.freepnglogos.com/uploads/yahoo-logo-png/yahoo-logo-png-free-download-3.png";

// Find the Google search button and store it in a variable.
let searchButton = document.querySelector(".FPdoLc.lJ9FBc .gNO89b");

// Modify the text of the button so that it says "Yahooo!" instead
searchButton.value = "Yahooo!"