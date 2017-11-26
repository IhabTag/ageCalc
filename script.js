/*global console, alert, prompt*/

function ageCalc(myAge) {
    
    "use strict";
    
    var calcAge;
    
    myAge = document.getElementById("ageInYears").value;
    
    if (myAge > 0 && myAge < 200) {
        
        calcAge = myAge * 365;
        
        return (document.getElementById("resultText").innerHTML = "Age in Days = " +
            "<span style='font-weight: bold;'>" + calcAge + "</span> days");
    } else {
        calcAge = (document.getElementById("resultText").innerHTML = "Please enter a valid age!");
    
        return (document.getElementById("resultText").innerHTML = "<span style='font-weight: bold;'>" + calcAge + "</span>");
    }
}