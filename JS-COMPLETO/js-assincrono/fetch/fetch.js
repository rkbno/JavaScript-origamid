const doc = fetch('./style.css')

doc.then(r => r.text())
.then(body =>{
    const conteudo = document.querySelector('.conteudo')
    const style = document.createElement('style')
    style.innerHTML = body
    conteudo.appendChild(style)
}) 
