function insert(num){
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function clean(){
    document.getElementById('display').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        resultado = resultado.replace("%", "/100*");
        document.getElementById('display').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('display').innerHTML = 'Error';
    }
}
