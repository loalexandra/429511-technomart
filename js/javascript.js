/*  WRITE  US  POPUP VARIABLES */
var writeLink = document.querySelector(".write-us-link");
var writePopup = document.querySelector(".about-write-us-popup");
var writeClose = writePopup.querySelector(".close-write-us");
var writeName = writePopup.querySelector("#write-us-form-name");

/* INTERACTIVE MAP POPUP VARIABLES */

var mapLink = document.querySelector(".about-map");
var mapPopup = document.querySelector(".about-map-popup");
var mapClose = mapPopup.querySelector(".close-map");

/* CART POPUP VARIABLES */

var cartLink = document.getElementsByClassName("product-buy-button");
var cartComplete = document.querySelector(".product-list-cart-popup");
var cartContinue = cartComplete.querySelector(".continue-popup-button");
var cartClose = cartComplete.querySelector(".close-cart");

/* WRITE US FUNCTION */

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  writeName.focus();
});

writeClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
});

/* INTERACTIVE MAP POPUP FUNCTION */

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
});

/* CART POPUP */

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartComplete.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartComplete.classList.remove("modal-show");
});
