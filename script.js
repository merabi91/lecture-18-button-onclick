var x = 1;

document.getElementById('output-area').innerHTML = x;

function button1() {
    if(x >= 10 ){
        alert(' maximum value 10 ')
        return false ;
    }  
    document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
    if(x <= 0 ){
    alert(' minimum value 0 ')
    return false ;
}  
    document.getElementById('output-area').innerHTML = --x;
}