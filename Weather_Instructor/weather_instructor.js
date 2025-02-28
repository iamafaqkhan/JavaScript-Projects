// Program to give instruction about weather 

var todayTemperature;
var temperatureUnit;
var centiGrade;
var fahrenheit;

todayTemperature = +prompt("Enter Temperature");
temperatureUnit = prompt("Enter Temperature Unit (c/f)");

// This will convert the fahrenheit to centigrade
if(temperatureUnit.toLowerCase() === "c"){

    centiGrade = (todayTemperature - 32) * 5/9;

    if(centiGrade >= 10 && centiGrade <=20){
        alert("Temperature in CentiGrade: " + centiGrade + "\nToday weather is Cold, Take a Jacket");
    }else if(centiGrade >= 21 && centiGrade <=26){
        alert("Today weather is Awesome, No need to take a Jacket");
    }else if(centiGrade >= 27 && centiGrade <=40){
        alert("Today Weather is Hot, Take a Shower")
    }

    // This will convert the centigrade to fahrenheit
}else if (temperatureUnit.toLowerCase() === "f"){

    fahrenheit = (todayTemperature * 9/5) + 32;

    if(fahrenheit >= 42 && fahrenheit <=52){
        alert("Today weather is Cold, Take a Jacket");
    }else if(fahrenheit >= 53 && fahrenheit <=65){
        alert("Today weather is Awesome, No need to take a Jacket");
    }else if(fahrenheit >= 66 && fahrenheit <=85){
        alert("Today Weather is Hot, Take a Shower")
    }
}
