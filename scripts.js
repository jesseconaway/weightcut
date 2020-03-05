var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var sideNav = document.getElementById("sideNav");
var sideNavBackground = document.getElementById("sideNavBackground");
var openMenuIcon = document.getElementById("openMenuIcon");
var closeMenuIcon = document.getElementById("closeMenuIcon");
var bmrRes = document.getElementById("bmrResult");
var bmrSubmit = document.getElementById("bmrCalcSubmit");

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

function pwoSubmit() {
  var intensityVal = document.getElementById("intensity").value;
  var durationVal = document.getElementById("duration").value;
  var intensity = document.getElementById("intensity");
  var duration = document.getElementById("duration");
  var protRes = document.getElementById("proteinResult");
  var carbRes = document.getElementById("carbohydrateResult");
  var calRes = document.getElementById("calorieResult");

  var weightVal = document.getElementById("pwoWeight").value;
  var heightVal = document.getElementById("pwoHeight").value;
  var male = document.getElementById("pwoMale");
  var female = document.getElementById("pwoFemale");
  var weight = document.getElementById("pwoWeight");
  var height = document.getElementById("pwoHeight");

  var proteinValueMale = ((intensityVal*3.5*(.897*weightVal+.105*heightVal-19.2)/440)*durationVal)*.05;
  var carbValueMale = ((intensityVal*3.5*(.897*weightVal+.105*heightVal-19.2)/440)*durationVal)*.2;
  var proteinValueFemale = ((intensityVal*3.5*(.897*weightVal+.105*heightVal-48.3)/440)*durationVal)*.05;
  var carbValueFemale = ((intensityVal*3.5*(.897*weightVal+.105*heightVal-48.3)/440)*durationVal)*.2;
  var calValueMale = (intensityVal*3.5*(.897*weightVal+.105*heightVal-19.2)/440)*durationVal;
  var calValueFemale = (intensityVal*3.5*(.897*weightVal+.105*heightVal-48.3)/440)*durationVal;
  
  if (!weight.validity.valueMissing && !height.validity.valueMissing && !duration.validity.valueMissing && !intensity.validity.valueMissing) {
     if (male.checked){
      calRes.innerHTML = Math.round(calValueMale) + " calories burned";
      carbRes.innerHTML = Math.round(carbValueMale) + " grams of carbohydrates";
      protRes.innerHTML = Math.round(proteinValueMale) + " grams of protein";
    } else if (female.checked){
      calRes.innerHTML = Math.round(calValueFemale) + " calories burned";
      carbRes.innerHTML = Math.round(carbValueFemale) + " grams of carbohydrates";
      protRes.innerHTML = Math.round(proteinValueFemale) + " grams of protein";
    } else if (!male.checked && !female.checked) {
      calRes.innerHTML = "0";
      carbRes.innerHTML = "Error";
      protRes.innerHTML = "Select Gender";
    }
  } else if (weight.validity.valueMissing || height.validity.valueMissing || duration.validity.valueMissing || intensity.validity.valueMissing) {
    calRes.innerHTML = "0";
    carbRes.innerHTML = "Error";
    protRes.innerHTML = "Complete All Sections";
  }
}

var bmrResult;

bmrSubmit.addEventListener("click", function() {
  var bmrAgeVal = document.getElementById("age").value;
  var bmrAge = document.getElementById("age");
  var bmrWeightVal = document.getElementById("bmrWeight").value;
  var bmrHeightVal = document.getElementById("bmrHeight").value;
  var bmrMale = document.getElementById("bmrMale");
  var bmrFemale = document.getElementById("bmrFemale");
  var bmrWeight = document.getElementById("bmrWeight");
  var bmrHeight = document.getElementById("bmrHeight");
  var bmrValueMale = ((bmrWeightVal/.2205)+(bmrHeightVal*15.875)-(bmrAgeVal*5)+5);
  var bmrValueFemale = ((bmrWeightVal/.2205)+(bmrHeightVal*15.875)-(bmrAgeVal*5)-161);

  var sleepingVal = document.getElementById("sleeping").value;
  var sittingVal = document.getElementById("sitting").value;
  var standingVal = document.getElementById("standing").value;
  var walkingVal = document.getElementById("walking").value;
  var laborVal = document.getElementById("labor").value;

  if (!bmrWeight.validity.valueMissing && !bmrHeight.validity.valueMissing && !bmrAge.validity.valueMissing) {
     if (bmrMale.checked){
      bmrResult = Math.round(bmrValueMale);
    } else if (bmrFemale.checked){
      bmrResult = Math.round(bmrValueFemale);
    } else if (!bmrMale.checked && !bmrFemale.checked) {
      bmrResult = "Select Gender";
    }
  } else if (bmrWeight.validity.valueMissing || bmrHeight.validity.valueMissing || bmrAge.validity.valueMissing) {
    bmrResult = "Complete All Sections";
  }

  bmrResult += Math.round((bmrResult/24*sleepingVal)-(bmrResult/24*sleepingVal));
  bmrResult += Math.round((bmrResult/24*1.2*sittingVal)-(bmrResult/24*sittingVal));
  bmrResult += Math.round((bmrResult/24*1.375*standingVal)-(bmrResult/24*standingVal));
  bmrResult += Math.round((bmrResult/24*1.725*walkingVal)-(bmrResult/24*walkingVal));
  bmrResult += Math.round((bmrResult/24*1.9*laborVal)-(bmrResult/24*laborVal));
  
  bmrRes.innerHTML = bmrResult + " Daily Calories Burned";
})
var sleeping = document.getElementById("sleeping");
var sitting = document.getElementById("sitting");
var standing = document.getElementById("standing");
var walking = document.getElementById("walking");
var labor = document.getElementById("labor");
sleeping.addEventListener("input", function(){
  bmrSubmit.click();  })
sitting.addEventListener("input", function(){
  bmrSubmit.click();  })
standing.addEventListener("input", function(){
  bmrSubmit.click();  })
walking.addEventListener("input", function(){
  bmrSubmit.click();  })
labor.addEventListener("input", function(){
  bmrSubmit.click();  })

function glycSubmit() {
  var glycRes = document.getElementById("glycogenResult");
  var sodiumRes = document.getElementById("sodiumResult");
  var weightVal = document.getElementById("glycWeight").value;
  var heightVal = document.getElementById("glycHeight").value;
  var weight = document.getElementById("glycWeight");
  var height = document.getElementById("glycHeight");
  var male = document.getElementById("glycMale");
  var female = document.getElementById("glycFemale");

  var glycValueMale = ((.897*weightVal+.105*heightVal-19.2)*11.67+(weightVal/0.556))/453.51;
  var glycValueFemale = ((.897*weightVal+.105*heightVal-48.3)*11.67+(weightVal/0.556))/453.51;
  var sodiumValue = weightVal*0.02;
  
  if (!weight.validity.valueMissing && !height.validity.valueMissing) {
     if (male.checked){
      glycRes.innerHTML = glycValueMale.toPrecision(3) + " pounds lost from glycogen";
      sodiumRes.innerHTML = sodiumValue.toPrecision(3) + " pounds lost from sodium";
    } else if (female.checked){
      glycRes.innerHTML = glycValueFemale.toPrecision(3) + " pounds lost from glycogen";
      sodiumRes.innerHTML = sodiumValue.toPrecision(3) + " pounds lost from sodium";
    } else if (!male.checked && !female.checked) {
      glycRes.innerHTML = "Error";
      sodiumRes.innerHTML = "Select Gender";
    }
  } else if (weight.validity.valueMissing || height.validity.valueMissing) {
    glycRes.innerHTML = "Error";
    sodiumRes.innerHTML = "Complete All Sections";
  }
}



