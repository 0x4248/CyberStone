/**
 * Topnav.js
 * This javascript file is used to make the topnav responsive 
*/

function topnav_click() {
  // Get the topnav element
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
