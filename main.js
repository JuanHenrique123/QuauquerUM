 let nomeUsuario = 'Juan, Yuri, Nanbes'

 alert(nomeUsuario);
 alert(aula2)

function soma(num1,num2){
    return num1+num2;

}

console.log(soma(10,10))


function multiplication(num1,num2){
    return num1*num2;

}

console.log("a aréa do quadrado é", multiplication(6,6))

let areaTriangulo = function(a,b){
    return (a*b)/2;
 }

 console.log ("área do triângulo é", areaTriangulo(6,6), "cm²")


let a = parseInt(prompt("primeiro valor"))
let b = parseInt(prompt("segundo valor"))
let c = parseInt(prompt("terceiro valor"))

function media(a,b,c){
    return ((a+b+c)/3);

}

document.write(media(a, b, c))