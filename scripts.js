var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var sideNav = document.getElementById("sideNav");
var sideNavBackground = document.getElementById("sideNavBackground");
var openMenuIcon = document.getElementById("openMenuIcon");
var closeMenuIcon = document.getElementById("closeMenuIcon");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var dropdownContent = this.nextElementSibling;
  var indicator = this.children[0];
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  if (indicator.classList.contains("rotate")) {
  indicator.classList.remove("rotate");
  } else {
  indicator.classList.add("rotate");
  }
  });
}

function openMenu() {
  sideNav.style.left = "0px";
  sideNavBackground.style.left = "0px";
  openMenuIcon.style.display = "none";
  closeMenuIcon.style.display = "block";
  closeMenuIcon.style.left = "230px";

document.addEventListener("click", function(event){
  sideNav.addEventListener("click", function(event){
  event.stopPropagation();
  })
  if (event.target != sideNav && event.target != openMenuIcon && event.target != sideNavBackground) {
    sideNav.style.left = "-230px";
    sideNavBackground.style.left = "-230px";
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  }
})
}

