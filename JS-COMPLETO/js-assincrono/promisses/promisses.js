// const promesa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     setTimeout(()=>{
//       resolve({nome: 'Breno', idade: 23});
//     }, 1000)
//   } else {
//     reject(Error('Um erro ocorreu na promise'))
//   }
// }).then(resolucao => {
//   console.log(resolucao)
// }).catch(rejeitado => {
//   console.log(rejeitado);
// })

// const retorno = promesa
// .then(resolucao => {
// console.log(resolucao)
//   return 'Teste'
// }
// );

// console.log(retorno)

const login = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve('Usuario Logado')
  }, 1000)
})

const dados = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve('Dados Carregados')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao)=>{
  console.log(resolucao)
})