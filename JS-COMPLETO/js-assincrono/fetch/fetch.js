const imagem = fetch('https://viacep.com.br/ws/35225000/json/');


imagem.then(r => {
    console.log(r)
    r.headers.forEach(console.log)
})
