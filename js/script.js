function waitForLoad(id, callback){
    var timer = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(timer);
            callback();
        }
    }, 100);
}

waitForLoad("modal", function(){
    console.log("load successful, you can proceed!!");

var modal = document.getElementById("modal");
var roomImg = document.getElementById("myImg");
var roomImg2 = document.getElementById("myImg2");
var roomImg3 = document.getElementById("myImg3");
var roomImg4 = document.getElementById("myImg4");
var roomdesc1 = document.getElementById("room-desc-1");
var room = document.getElementById("img01");
var captionText = document.getElementById("caption");

  roomImg.onclick = function(){
  modal.style.display = "block";
  room.src = this.src;
  captionText.innerHTML = this.alt;
  }
  roomImg2.onclick = function(){
  modal.style.display = "block";
  room.src = this.src;
  }
  roomImg3.onclick = function(){
  modal.style.display = "block";
  room.src = this.src;
  }
  roomImg4.onclick = function(){
  modal.style.display = "block";
  room.src = this.src;
  }  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
});


var slideIndex = 0;
showSlidesAuto(slideIndex);

function showSlidesAuto(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlidesAuto, 4000); 
}
