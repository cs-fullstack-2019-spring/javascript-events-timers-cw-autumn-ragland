//grab elements from HTML
var btn = document.getElementById("countdown");
var counter = 11;
var intervalID;
//define functions
function letsCoutdown() {
    counter = counter -1;
    console.log(counter);
    if (counter === 0)
    {
        console.log("LIFTOFF");
        clearInterval(intervalID);
        counter = 11
    }
}

function setID() {
    intervalID =setInterval(letsCoutdown, 500)
}
//listen for functions when button is clicked
btn.addEventListener("click",setID);
btn.addEventListener("click",letsCoutdown);
