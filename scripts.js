console.log("Running");

const navMobile = document.querySelector(".nav-mobile");
const menuButton = document.getElementById("hamburger-btn");
const navMobileList = document.querySelector(".nav-mobile--header");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav__link");

console.log(menuButton);
console.log(closeBtn);
// console.log(menuBtn);
menuButton.addEventListener("click", (e) => {
  console.log("hamburger icon is clicked");
  if (navMobile.classList.contains("show-mobile")) {
    navMobile.classList.remove("show-mobile");
    navMobile.classList.add("hide-mobile");
    navMobileList.classList.remove("hide-mobile");
    navMobileList.classList.add("show-mobile");
  }
  console.log(this);
});

closeBtn.addEventListener("click", () => {
  console.log("close button clicked");
  if (navMobileList.classList.contains("show-mobile")) {
    navMobileList.classList.remove("show-mobile");
    navMobileList.classList.add("hide-mobile");
    navMobile.classList.remove("hide-mobile");
    navMobile.classList.add("show-mobile");
  } else {
  }
});

// // loop through the menu then add eventlisteners to each menu
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (navMobileList.classList.contains("show-mobile")) {
      navMobileList.classList.remove("show-mobile");
      navMobileList.classList.add("hide-mobile");
      navMobile.classList.add("hide-mobile");

      navMobile.classList.add("show-mobile");
      navMobile.classList.add("flex");
      navMobile.classList.remove("hide-mobile");
    }
  });
});
