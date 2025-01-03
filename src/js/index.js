const itemsPerguntasErespostas = document.querySelectorAll('.item');


itemsPerguntasErespostas.forEach(function (item) {
  item.addEventListener('click', () => {
    const itemAtivo = document.querySelector('.ativo')
    //O atributo .contains() retorna um valor booleano indicando se um nó tem um determinado nome de classe.
    if (item.classList.contains('ativo')) {
      itemAtivo.classList.remove('ativo')
    } else {
      if (itemAtivo) {
        itemAtivo.classList.remove('ativo')
      }
      item.classList.add('ativo')
    }
  })
})




