/**
 * TODO : Make Navbar toggle
 * **/

const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileNavigation = document.querySelector(
  ".mobile-navigation .container"
);

// Function for opening mobile navigation
const openMobileNavigation = () => {
  mobileNavigation.style.cssText = "display:flex";
};

// Function for closing mobile navigation
const closeMobileNavigation = () => {
  mobileNavigation.style.cssText = "display:none";
};

hamburgerIcon.addEventListener("click", openMobileNavigation);
closeIcon.addEventListener("click", closeMobileNavigation);

/**
 * TODO : DO Feature Selection
 * **/

/**
 * TODO : Make FAQ Accordion
 * **/

/**
 * TODO : DO Form Validation
 * **/
