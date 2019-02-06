//grab elements from HTML
var btn = document.getElementById("clickme");
var txt = document.getElementById("txt");
var message = document.getElementById("message");
var typeAllow = false;
//set attribute
txt.setAttribute("disabled","");
//define function
function allowType() {
    console.log("clicked");
    if(typeAllow === true){
        message.textContent = "";
        txt.setAttribute("disabled","");
        typeAllow = false;
    }
    else{
        console.log("clicked2");
        message.textContent = "begin typing";
        txt.removeAttribute("disabled");
        typeAllow = true;
    }
}
//listen for function when button is clicked
btn.addEventListener("click",allowType);
