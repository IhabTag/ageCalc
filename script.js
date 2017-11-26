/*global console, alert, prompt*/

function ageCalc(myAge) {
    
    "use strict";
    
    myAge = document.getElementById("ageInYears").value;
    
    return (document.getElementById("resultText").innerHTML = "Age in Days = " +
            "<span style='font-weight: bold;'>" + (myAge * 365) + "</span> days");
}