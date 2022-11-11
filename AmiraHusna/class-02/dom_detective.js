// Exercise: The DOM Detective
// Visit General Assembly's website in Google Chrome, and open up the JavaScript console.

// You'll have to do this all in the JavaScript console, so keep track of what you have written!

// Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

// The title of the page
document.querySelector("title");

// The logo in the nav
document.querySelector("nav .navi_banner_logo")

// The "Find Your Course" button in the nav
document.querySelectorAll(".navi_menu .highlight a")

// The heading that says "Learning Today, Leading Tomorrow"
document.querySelector("h1")

// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
document.querySelectorAll("ul .navi_menu_dropdown_nested-dropdown");

// The amount of campuses around the world
document.querySelector('a[href="/locations"] div[class="facts_list_item_quantity"]');

// The number of instructors
document.querySelector('a[href="/how-we-work/teach-at-general-assembly"] div[class="facts_list_item_quantity"]');

// The logos of GA's featured clients and hiring partners
document.querySelector('div[class="Employers__list___1cuG_"]');

// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
document.querySelectorAll('div[class="navi_footer-grid-one-half navi_footer-main-col"] a');

// The input where you add your email to sign up for the newsletter (in the footer)
document.querySelector('div[class="navi_footer-signup-input"] input');
