// const img = document.querySelector('img');

// function callback(event){
//   console.log(event)
// }

// img.addEventListener('click', callback)

// const imagensLista = document.querySelector('.animais-lista')

// function callbackLista(event){
//   console.log(event.currentTarget)
//   console.log(event.currentTarget)
//   console.log(event.type)
// }

// // imagensLista.addEventListener('click', callbackLista)

// const linkExterno = document.querySelector('a[href^="http"]')

// function handleLinkExterno(event){
//   event.preventDefault()
//   // console.log(event)
//   // console.log(this)
//   console.log(event.currentTarget)
// }

// linkExterno.addEventListener('click', handleLinkExterno)


// const h1 = document.querySelector('h1')

// function handleEvent(event){
//   console.log(event.type, event)
// }

// // h1.addEventListener('click', handleEvent)
// // h1.addEventListener('mouseenter', handleEvent)
// // h1.addEventListener('mousemove', handleEvent)

// // window.addEventListener('scroll', handleEvent)
// // window.addEventListener('risize', handleEvent)

// function handleEvent(event){
//   if(event.key === 's'){
//     document.body.style.background = 'red'
//   } else if (event.key === ' '){
//     document.body.style.background = 'blue'
//   }
//   console.log(event.key)
// }

// window.addEventListener('keydown', handleEvent)

// const imgs = document.querySelectorAll('img')

// function handleImg(event){
//   console.log(event.currentTarget.getAttribute('src'))
// }

// imgs.forEach((img) =>{
//   img.addEventListener('click', handleImg)
// })


// exercicios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a')

linkInterno.forEach((event) => {
  event.classList.add('ativo')

  
  
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
