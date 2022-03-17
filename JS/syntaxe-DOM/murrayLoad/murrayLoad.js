let lesImg = document.querySelectorAll('img');
let tabImg = Array.from(lesImg);
tabImg.map(function(uneImage, index){
    uneImage.addEventListener('load', function(){
        console.log("Index : ", index, "loaded");
    })
});