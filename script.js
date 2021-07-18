//timer - countdown

var countDown = new Date("May 10, 2020 17:00:00").getTime();

var timer = setInterval(function() {

var now = new Date().getTime();

var difference = countDown - now;   //difference in time from now to May 10th

var seconds = Math.floor(difference / 1000);

var timer = seconds.toLocaleString();

document.getElementById("demo").innerHTML = timer ;

}, 1000);

//carousel

var slideNumber = 1;
visualSlides(slideNumber);

function myCarousel(n) {        //previous button,next button
  visualSlides(slideNumber += n);
}

function currentImage(n) {      //function for the dots under images
  visualSlides(slideNumber = n);
}

function visualSlides(n) {       //getting values for slides, dots from classnames

  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideNumber = 1}
  if (n < 1) {slideNumber = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideNumber-1].style.display = "block";
  dots[slideNumber-1].className += " active";
}

  function imageAnimation(id, first, last, duration) {     //animation of images in slider

    var range = last - first;                              //assuming integer values for the first and end values
    var current = first;
    var incrementation = last > first? 1 : -1;

    var stepTime = Math.abs(Math.floor(duration / range)); //calculation of step time to show all values
    var obj = document.getElementById(id);

    var timer = setInterval(function() {
        current += incrementation;
        obj.innerHTML = current;

        if (current == last) {
            clearInterval(timer);
        }
    }, stepTime);
}
imageAnimation("value", 30, 37, 5000);



//Citing URLs

//https://www.w3schools.com/js/js_date_methods.asp
//https://www.w3schools.com/howto/howto_js_countdown.asp
