let result = document.getElementById('result');
function numShow(number){
    result.value += number;
}
function clr(){
    result.value = '';
}
function caculation(){
    let x = result.value;
    let y = eval(x);

    result.value = y;
}