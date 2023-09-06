function exercicio1(){
    var nota = parseInt(prompt("digite um  numero"))
    while(nota < 0 || nota > 10){
        nota = parseInt(prompt("digite novamente a nota"))
    }

document.getElementById("root").style.display = "block"
document.getElementById("root").innerHTML = `
<P> sua nota:${nota}</p>`
}
function exercicio2 (){
    var tempo = 10
    while(tempo > 0){
        tempo--
        alert(tempo)
    }
}
function exercicio3 (){
    var nome = prompt("digite seu nome")
    var senha = prompt("digite seu senha")
    if(nome === senha){
        alert("Seu nome não pode ser igual sua senha")
    }else{
        alert("e isso ai")
    }
}
function exercicio4 (){
    var num1 = parseInt(prompt("digite um numero"))
    var num2 = parseInt(prompt("digite outro numero"))
    var resultado = num1 + num2
    alert(resultado)
}
function popo(){
    alert("ta limpinho")
}