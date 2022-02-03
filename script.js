const toggler = document.querySelector(".navbar > .toggler"),
  navListContainer = document.querySelector(".navbar > .nav-list-container");

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

let prevPageName = "";

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;

  //this is doing the display none for all the tabs one by one
  tabcontent = document.getElementsByClassName("tabcontent");
  
  console.log(tabcontent);

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // this is making the color of all to empty
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  if (pageName !== prevPageName) {
    document.getElementById(pageName).style.display = "block";
    document.getElementById(pageName).style.width = "97.9%";
    elmnt.style.backgroundColor = color;
  }
    prevPageName = pageName;
}
