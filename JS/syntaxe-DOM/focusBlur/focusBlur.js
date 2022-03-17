let leInput = document.querySelector('input');

leInput.addEventListener('focus', function(){
    leInput.style.backgroundColor = "red";
})

leInput.addEventListener('blur', function(){
    leInput.style.backgroundColor = "transparent";
})
