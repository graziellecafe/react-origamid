const menu = {
  seletor: '.principal', 
}; 

console.log(menu.seletor.toUpperCase())


// Função 
function upperName(name) {
  return name.toUpperCase();
}

console.log(upperName('Grazielle')); 

// Arrow Function
const lowerCase = (name) => {
  return name.toLowerCase(); 
}

console.log(lowerCase('GRAZIELLE')); 

// Desestruturação 
const frutas = ['banana', 'uva']; 
const [fruta1] = frutas;
console.log(fruta1); // banana 

// rest 
function showList(empresa, ...clientes){
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  })
}

showList('Google', ['André', 'Rafael', 'Grazielle']); 

// spread
const maximo = Math.max(10, 5, 20, 15, 4);
console.log(maximo);

const numeros = [10, 5, 18]; 
const maior = Math.max(...numeros); 
console.log(maior); 

const numeros2 = [...numeros, 27, 89, 56];
const maior2 = Math.max(...numeros2);  
console.log(maior2)

const carro = { 
  cor:'Azul',
  portas: 4
}

const carroAno = { ...carro, ano: 2023}; 
console.log(carroAno); 