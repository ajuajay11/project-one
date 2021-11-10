function myFunction() {
    var x= document.getElementById("menu");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}


// var superSlide = function(slider) {
  
//     this.sliderItems = slider.getElementsByTagName('div');
//     this.dots = slider.querySelector('.dots');
    
//     this.init = function() {
//       for (i = 0; i < this.sliderItems.length; i++) {
//         var dot = document.createElement('li');
//         dot.classList.add('list-inline-item');
//         dot.setAttribute("data-slide-num", i);
//         dot.innerHTML = i;
//         dot.classList.add(i === 0 ? 'active' : 'inactive');
//         dot.addEventListener("click", this.runSlider.bind(this));
//         this.dots.appendChild(dot);
//       }
//     }
    
//     this.runSlider = function(evt) {
//       var activeDot = evt.currentTarget;
//       var dnum = activeDot.dataset.slideNum;
//       for (i = 0; i < this.sliderItems.length; i++) {
//         var cssIdx = i + 1;
//         var inactiveDot = slider.querySelector('.list-inline-item:nth-child(' + cssIdx + ')');
//         this.sliderItems[i].classList.remove('active');
//         this.sliderItems[dnum].classList.add('active');
//         inactiveDot.classList.remove('active');
//         activeDot.classList.add('active');
//       }
//     }
    
//     this.init()
    
//   }
  
//   var slider1 = new superSlide(document.getElementById('slider'))
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}