let sectionResultado = document.getElementById('section-resultado');
let sectionPesquisa = document.getElementById('section-pesquisa');

const botao = document.getElementById('botao')

let resultado = '';
let titulo = '';
let tags = '';

botao.addEventListener('click', function() {
  let campoPesquisa = document.getElementById('input-pesquisa');
  let valorCampoPesquisa = campoPesquisa.value.toLowerCase();

  if (valorCampoPesquisa === '') {
    alert('Por favor, informe um atleta')
    sectionResultado.innerHTML = '' 
    return
  }

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    tags = dado.tags.toLocaleLowerCase();
    if (titulo.includes(valorCampoPesquisa) || tags.includes(valorCampoPesquisa)) {
      resultado = `
        <div class="atleta">
          <h2>${dado.titulo}</h2>
          <p>
            ${dado.descricao}
          </p>
          <a target="_blank" href="${dado.link}">Mais informações!</a>
        </div>
      `
      sectionResultado.innerHTML = resultado 
      campoPesquisa.value = ''
      return
    } else {
      sectionResultado.innerHTML = '<p>Nada foi encontrado.</p>'    
    }
  }
  campoPesquisa.value = ''
})

