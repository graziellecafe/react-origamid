const grupoA = 100; 
const grupoB = 200;

// if não é uma expressão 
if(grupoA > grupoB){
  console.log("Grupo A, venceu");
} else {
  console.log("Grupo B, venceu");
}

// expressão 
const vencedor = grupoA > grupoB ? "Grupo A, venceu" : "Grupo B, venceu"
console.log(vencedor); 

const active = true; 
const btn = active && "Botão está ativo"; 
console.log(btn);