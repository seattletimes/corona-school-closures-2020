// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);
var pub_schools = require("../../data/public.sheet.json");
var pri_schools = require("../../data/privateSchools.sheet.json");
var hi_ed = require("../../data/higherEd.sheet.json");
require("component-responsive-frame/child");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var m = String(today.getMonth() + 1).padStart(1, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = m + '/' + dd + '/' + yyyy;
today = m + '/' + dd;
console.log(pri_schools);

function publicSchools() {
  pub_schools.forEach((element) => {
    var thisSchool = document.getElementById( element.id );
    if ( element.endDate >= today ){
      document.getElementById( element.county ).classList.remove("hideMe");
    } else {
      thisSchool.style.display = "none";
    }
  });
};


function privateSchools() {
  pri_schools.forEach((element) => {
    var thisSchool = document.getElementById( element.id );
    if ( element.endDate >= today ){
      console.log(element.endDate);
      document.getElementById( element.county ).classList.remove("hideMe");
    } else {
      console.log(element);
      thisSchool.style.display = "none";
    }
  });
};

function higherEd() {
  hi_ed.forEach((element) => {
    var thisSchool = document.getElementById( element.id );
    if ( element.endDate >= today ){
      console.log(element.endDate);
      document.getElementById( element.county ).classList.remove("hideMe");
    } else {
      console.log(element);
      thisSchool.style.display = "none";
    }
  });
};






var containers = document.getElementsByClassName("container");


for (var i = 0; i < containers.length; i++) {

var privateORpublic = containers[i].getAttribute("id");

console.log(privateORpublic);

if ( privateORpublic === "private" ){
  privateSchools();
} else if ( privateORpublic === "higher" ) {
  higherEd();
} else { publicSchools(); }


var filterCounties = document.getElementsByClassName("countyButton");
var allCards = document.querySelectorAll("[data-county]");

var myFunction = function() {

    for (var i = 0; i < filterCounties.length; i++) {
        filterCounties[i].classList.remove("selected");
    }

    this.classList.add("selected");
    var countyID = this.getAttribute("id");
    var matchedCounty = document.querySelectorAll(`[data-county='${ countyID }']`);

    if ( countyID === "all" ){
      for (var i = 0; i < allCards.length; i++) {
          allCards[i].classList.remove("hideMe");
      }
    } else {
      for (var i = 0; i < allCards.length; i++) {
          allCards[i].classList.add("hideMe");
      }

      for (var i = 0; i < matchedCounty.length; i++) {
          matchedCounty[i].classList.remove("hideMe");
      }
    }


};

//add Click event to all county filter buttons
for (var i = 0; i < filterCounties.length; i++) {
    filterCounties[i].addEventListener('click', myFunction, false);
}

}
