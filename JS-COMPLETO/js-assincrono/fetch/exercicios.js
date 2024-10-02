//tarefa 1

// const inputCep = document.getElementById('cep');
// const btnCep = document.getElementById('btnCep')
// const resultadoCep = document.querySelector('.resultadoCep')

// btnCep.addEventListener('click', handClick);

// function handClick(event){
//   event.preventDefault();
//   const cep = inputCep.value
//   buscaCep(cep)
//   console.log(event)
// }

// function buscaCep(cep){
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(r => r.text())
//   .then(body => {
//     resultadoCep.innerHTML = body
//   })
// }


//tarefa 2
// const btcDisplay = document.querySelector('.btc')
// function fetchBtc(){
//   fetch('https://blockchain.info/ticker')
//   .then(r => r.json())
//   .then(btcJson =>{
//     btcDisplay.innerHTML = 'R$ ' + btcJson.BRL.buy
//   })
// }

// // setInterval(fetchBtc, 1000 * 30)

// fetchBtc()

// tarefa 3
const chuck = document.querySelector('.chuck');
const proxima = document.querySelector('.proxima')

function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    chuck.innerHTML = piada.value;
  })
}
proxima.addEventListener('click', puxarPiada)

puxarPiada()
