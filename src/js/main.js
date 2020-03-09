// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);
var schools = require("../../data/public.sheet.json");

require("component-responsive-frame/child");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var m = String(today.getMonth() + 1).padStart(1, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = m + '/' + dd + '/' + yyyy;
today = m + '/' + dd;
console.log(today);


schools.forEach((element) => {

  var thisSchool = document.getElementById( element.id );

  if ( element.endDate >= today ){

  } else {
    thisSchool.style.display = "none";
  }


});



var filterCounties = document.getElementsByClassName("countyButton");
var allCards = document.querySelectorAll("[data-county]");

var myFunction = function() {
    var countyID = this.getAttribute("id");
    var matchedCounty = document.querySelectorAll(`[data-county='${ countyID }']`);

    for (var i = 0; i < allCards.length; i++) {
        allCards[i].classList.add("hideMe");
    }

    for (var i = 0; i < matchedCounty.length; i++) {
        matchedCounty[i].classList.remove("hideMe");
    }


};

for (var i = 0; i < filterCounties.length; i++) {
    filterCounties[i].addEventListener('click', myFunction, false);
}
