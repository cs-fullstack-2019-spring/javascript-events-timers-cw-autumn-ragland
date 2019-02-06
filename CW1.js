//grab elements from HTML
var checkbox = document.getElementsByTagName("input");
//define function
function donotclick(e) {
    alert("I TOLD YOU NOT TO CLICK IT");
    e.preventDefault();
}
//listen for function when button is clicked
checkbox[0].addEventListener("click",donotclick);
