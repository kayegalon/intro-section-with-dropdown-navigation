const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close-menu");
const menuContent = document.getElementById("sideNav");

menuBtn.addEventListener("click", function() {
	menuContent.style.width = "250px";
})

closeBtn.addEventListener("click", function() {
	menuContent.style.width = "0px";
})

const dropdownFeat = document.querySelector(".features-mobile");
const dropdownFeatContent = document.querySelector(".features-content-mobile");
const featArrowUp = document.querySelector(".f-arrow-up-mobile");
const featArrowDown = document.querySelector(".f-arrow-down-mobile");

dropdownFeat.addEventListener("click", function() {
	dropdownFeatContent.style.display = "block";
	featArrowUp.style.display = "inline-block";
	featArrowDown.style.display = "none";
})

const dropdownCo = document.querySelector(".company-mobile");
const dropdownCoContent = document.querySelector(".company-content-mobile");
const coArrowUp = document.querySelector(".c-arrow-up-mobile");
const coArrowDown = document.querySelector(".c-arrow-down-mobile");

dropdownCo.addEventListener("click", function() {
	dropdownCoContent.style.display = "block";
	coArrowUp.style.display = "inline-block";
	coArrowDown.style.display = "none";
})