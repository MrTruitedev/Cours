let txt = document.querySelector('textarea');
let btn = document.querySelector('button');
txt.addEventListener('keyup', function(event){
    if(txt.value.length >=5){
        btn.disabled = true;
    }else{
        btn.disabled = false;
    }
})