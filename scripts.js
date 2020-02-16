var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var sideNav = document.getElementById("sideNav");
var sideNavBackground = document.getElementById("sideNavBackground");
var menuIcon = document.getElementById("openMenuIcon");

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
  menuIcon.style.left = "230px";
}

document.addEventListener("click", function(event){
  var sideNavContents = sideNav.querySelectorAll("a, ul, li, img, div");
  if (event.target != sideNav && event.target != sideNavContents && event.target != menuIcon) {
    sideNav.style.left = "-230px";
    sideNavBackground.style.left = "-230px";
    menuIcon.style.left = "0px";
  }
})


