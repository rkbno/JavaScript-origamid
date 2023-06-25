// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

aulas.forEach((item) => { 
  console.log(item);
});




// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter(n => n > 100);

console.log(maiorQue100);
console.log(numeros);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temInstrumentos = instrumentos.some(instrumento => instrumento === 'Baixo');

console.log(temInstrumentos);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const newItens = compras.map((item) => {
  const valor = +item.preco.replace('R$', '').trim().replace(',','.');
  const total = valor.reduce((acumulador, atual) => {
    return acumulador + atual;
  });
  
  
  
  console.log(total);
});
