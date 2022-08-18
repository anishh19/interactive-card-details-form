function submit(){
    document.querySelector(".active").style.display = "none";
    document.querySelector(".complete").style.display = "flex";
    
}

function reset(){
    document.querySelector(".active").style.display = "flex";
    document.querySelector(".complete").style.display = "none";
    
}

document.querySelector("#submit").addEventListener("click",submit);
document.querySelector("#continue").addEventListener("click",reset);





document.querySelector("#fName").addEventListener("change", (e)=>{
    document.querySelector("#fullName").textContent= e.target.value.toUpperCase();
});
document.querySelector("#cNumber").addEventListener("change", (e)=>{
    document.querySelector("#cardNumber").textContent= e.target.value;
});
document.querySelector("#expMonth").addEventListener("change", (e)=>{
    document.querySelector("#expiryMonth").textContent= e.target.value;
});
document.querySelector("#expYear").addEventListener("change", (e)=>{
    document.querySelector("#expiryYear").textContent= e.target.value;
});


$('#continue').click(function() {

 

})