/*var d = new Date();
var n = d.toTimeString() ;
  document.getElementById("clock").innerHTML = n;*/

/* theme switcher */
function darkMode() {
   var element = document.body;
   element.classList="dark-mode";
}

function originalMode() {
   var element = document.body;
   element.classList="";
}

/* live clock */
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h= checkTime(h);    
  document.getElementById('ear').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

window.onload = function() {
  startTime();
} 


