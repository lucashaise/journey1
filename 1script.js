function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// space
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function()
function function1() {
  document.getElementById("myModal").style=("display:block");
}

// When the user clicks on <span> (x), close the modal
//span.onclick = 
function function2() {
  document.getElementById("myModal").style=("display:none");
  //modal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = 
function function3(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}