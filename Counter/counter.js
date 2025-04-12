let count = 0;

function updateDisplay() {
    const numberDisplay = document.getElementById("number");
    numberDisplay.innerText = count;

    if (count > 0) {
      numberDisplay.style.color = "green";
    } else if (count < 0) {
      numberDisplay.style.color = "red";
    } else {
      numberDisplay.style.color = "black";
    }
  }

function increment(){
    count++;
    updateDisplay();
    //document.getElementById("number").innerHTML = count;
    //console.log(count);
}
function decrement(){
    count--;
    updateDisplay();
    //document.getElementById("number").innerHTML = count;
    //console.log(count);
}