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

// let prevPageName = "";

// function openPage(pageName, elmnt, color) {
//   var i, tabcontent, tablinks;

//   //this is doing the display none for all the tabs one by one
//   tabcontent = document.getElementsByClassName("tabcontent");
//   const Flight=  document.getElementById("Flight");

//   console.log(Flight);

//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   // this is making the color of all to empty
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }

//   if (pageName !== prevPageName) {
//     // document.getElementById(pageName).style.display = "block";
//     // document.getElementById(pageName).style.width = "97.9%";
//     Flight.classList.toggle('active');
//     elmnt.style.backgroundColor = color;
//   }
//     prevPageName = pageName;
// }

// let flight = document.getElementById("Flight");
// let hotel = document.getElementById("Hotel");
// let car = document.getElementById("Car");
// let crusies = document.getElementById("Crusies");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
//     const markUp = `
//       <div id="${btn.innerText}" class="tabcontent active">
//       <h3>${btn.innerText}</h3>
//       <p>${btn.innerText} is where the heart is..</p>
//       </div>
// console.log(`${btn.innerText}`);
// `;

if(`${btn.innerText}`){
  console.log(`${btn.innerText}`);
    btn.classList.toggle('_active');
    document.getElementById("Flight").style.marginLeft = "0px";
    document.getElementById("Flight").style.width = "100%";
  }
  else{
    btn.classList.remove('_active');
    document.getElementById("Flight").style.marginLeft = "214px";
    document.getElementById("Flight").style.width = "0%";
  }
  });
});

function openPage() {
  // flight.classList.remove('tabcontent')
  // flightBtn.classList.toggle('_active');
  // console.log(flight);
}

//  }
// else if (`${btn.innerText}` === "Hotel"){
//   btn.classList.toggle('_active');
//   hotel.classList.toggle('active');
//   flight.classList.remove('active');
// }
// else null
