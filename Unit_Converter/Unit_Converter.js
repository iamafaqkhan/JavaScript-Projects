
var magnitude;
var unit;
var convertUnit;

magnitude = +prompt("Enter the magnitude: ");
unit = prompt("Enter Unit: ");
convertUnit = prompt("Enter Unit to convert to(mm, cm, m, km, i, f): ");

if(convertUnit.toLowerCase() === "mm"){
    magnitude = magnitude * 1000000;
    alert("KiloMeter is converted to Millimeter: " + magnitude.toFixed(2) + " " + "km");
}else if(convertUnit.toLowerCase() === "cm"){
    magnitude = magnitude * 100000;
    alert("KiloMeter is converted to Centimeter: " + magnitude.toFixed(2) + " " + "cm");
}else if(convertUnit.toLowerCase() === "m"){
    magnitude = magnitude * 1000;
    alert("KiloMeter is converted to Meter: " + magnitude.toFixed(2) + " " + "m");
}else if(convertUnit.toLowerCase() === "i"){
    magnitude = magnitude * 39370.1
    alert("KiloMeter is converted to Inch: " + magnitude.toFixed(2) + " " + "inch");
}else if(convertUnit.toLowerCase() === "f"){
    magnitude = magnitude * 3280.84
    alert("KiloMeter is converted to Foot: " + magnitude.toFixed(2) + " " + "foot"); 
}