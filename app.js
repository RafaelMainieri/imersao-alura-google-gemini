let section = document.getElementById('section-resultado');
let resultado = '';
const botao = document.getElementById('botao')

botao.addEventListener('click', function() {
  for (let i = 0; i < dados.length; i++) {
    resultado += `
    <div class="atleta">
      <h2>${dados[i].titulo}</h2>
      <p>
        ${dados[i].descricao}
      </p>
      <a target="_blank" href="${dados[i].link}">Mais informações!</a>
    </div>
  `
    section.innerHTML = resultado 
  }
})

