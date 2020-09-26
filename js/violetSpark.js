$(document).foundation();

var dropdown_lists = document.querySelectorAll(".dropdown");

dropdown_lists.forEach(function(currentValue){
  currentValue.addEventListener("click", function(){
    currentValue.classList.toggle("inactive");
    currentValue.classList.toggle("active");
  });
});