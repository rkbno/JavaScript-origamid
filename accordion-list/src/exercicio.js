function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); // imagens
  const tabContent = document.querySelectorAll('.js-tabcontent section'); // conteudo
  
  
  if(tabMenu.length && tabContent.length){
      tabContent[0].classList.add('ativo');
    
      function activeElement(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', ()=>{
        activeElement(index);
      });
    });
  };
};

initTabNav();


// funcão envolvendo a função do faq 
function faq(){
  
  //chamada dos dt dentro de faq
  const listFaq = document.querySelectorAll('.js-accordion dt');
  
  // validação se o js ta habilitado no browser
  if(listFaq.length){    
    //adicionando class ao abrir o browser no dt e dd
    listFaq[0].classList.add('ativo')
    listFaq[0].nextElementSibling.classList.add('ativo')
    //função de toggle nas classes do dt e dd
    function ativar(){
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
    
    //forEach de click em dt
    listFaq.forEach((event)=>{
      event.addEventListener('click', ativar);
    })
  }
}


//chamando a função do faq para ele ativar 
faq(); 
    
    


