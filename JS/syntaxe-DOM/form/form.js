const monForm = document.querySelector("form");

monForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
    console.log(event)
    monForm.reset();
});