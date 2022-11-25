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

const featureBtn = document.getElementsByClassName("feature-btn");
const feature = document.getElementsByClassName("feature");

function showFeature(id) {
  for (i = 0; i < 3; i++) {
    if (i === id) {
      featureBtn[i].classList.add("selected");
      feature[i].classList.remove("hidden");
    } else {
      featureBtn[i].classList.remove("selected");
      feature[i].classList.add("hidden");
    }
  }
}

/**
 * TODO : Make FAQ Accordion
 * **/

const arrow = document.getElementsByClassName("fa-chevron-down");
const answer = document.getElementsByClassName("answer");

function toggleFAQ(id) {
  for (i = 0; i < 4; i++) {
    if (i === id) {
      arrow[i].classList.toggle("expanded");
      answer[i].classList.toggle("hidden");
    } else {
      arrow[i].classList.remove("expanded");
      answer[i].classList.add("hidden");
    }
  }
}

/**
 * TODO : DO Form Validation
 * **/
