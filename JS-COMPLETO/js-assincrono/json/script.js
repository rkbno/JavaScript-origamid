fetch('./dados.json')
.then(r => r.json())
.then(json => {
 json.forEach(materia => {
  console.log(materia)
 });
})

const config = {
  player: "google",
  tempo: 25.5,
  aula: "2.1 javascript",
}

localStorage.config = JSON.stringify(config) 


const stringConf = JSON.stringify(config) 

console.log(stringConf)