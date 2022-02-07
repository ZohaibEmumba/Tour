const toggler = document.querySelector(".navbar > .toggler"),
  navListContainer = document.querySelector(".navbar > .nav-list-container");
const flight = document.getElementById("Flight");
const hotel = document.getElementById("Hotel");
const car = document.getElementById("Car");
const crusies = document.getElementById("Crusies");
const footer = document.getElementById("footer");
const controller = document.getElementById("controller");

toggler.addEventListener(
  "click",
  () => {
    toggler.classList.toggle("cross");
    navListContainer.classList.toggle("nav-active");
  },
  true
);

var slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("_active");
    footer.classList.toggle("_active");
    controller.classList.toggle("dotactive");

    if (`${btn.innerText}` === "Flight") {
      flight.classList.toggle("tabactive");
    } else if (`${btn.innerText}` === "Hotel") {
      hotel.classList.toggle("tabactive");
    } else if (`${btn.innerText}` === "Car") {
      car.classList.toggle("tabactive");
    } else {
      crusies.classList.toggle("tabactive");
    }
  });
});
