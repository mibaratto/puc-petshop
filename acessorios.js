const listaProdutos = [
  {
    descricao: 'Comedouro e Bebedouro Duplo Inox - 236 ml',
    imagem: './img/acessorio_01.jpg',
    alt: 'imagem de uma embalagem com lenços umedeciodos para cães',
    preco: 'R$ 22,45',
  },
  {
    descricao: 'Peiteira Tradicional - Peiteira Tradicional',
    imagem: './img/acessorio_02.jpg',
    alt: 'imagem de uma Peiteira Tradicional para cães',
    preco: 'R$ 32,22',
  },
  {
    descricao: 'Brinquedo Varinha Para Gato - Azul',
    imagem: './img/acessorio_03.jpg',
    alt: ' Imagem de brinquedo para gatos tipo varinha',
    preco: 'R$ 11,30',
  },
]

const divRowProdutos = document.getElementById('acessorios')

for (let i = 0; i < listaProdutos.length; i++) {
  const divColuna = document.createElement('div')
  const card = document.createElement('div')
  const infoCard = document.createElement('div')
  const imagemProdutos = document.createElement('img')
  const descricaoProdutos = document.createElement('p')
  const precoProdutos = document.createElement('p')
  const botaoProdutos = document.createElement('a')

  divColuna.setAttribute('class', 'col-sm-4')
  card.setAttribute('class', 'card')
  infoCard.setAttribute('class', 'card-body')
  descricaoProdutos.innerHTML = listaProdutos[i].descricao
  descricaoProdutos.setAttribute('class', 'card-title')
  imagemProdutos.setAttribute('src', listaProdutos[i].imagem)
  imagemProdutos.setAttribute('alt', listaProdutos[i].alt)
  imagemProdutos.setAttribute('class', 'card-img-top')
  precoProdutos.innerHTML = listaProdutos[i].preco
  precoProdutos.setAttribute('class', 'card-text')
  botaoProdutos.innerHTML = 'Comprar'
  botaoProdutos.setAttribute('class', 'btn btn-primary')

  divRowProdutos.appendChild(divColuna)
  divColuna.appendChild(card)
  card.appendChild(imagemProdutos)
  card.appendChild(infoCard)
  infoCard.appendChild(descricaoProdutos)
  infoCard.appendChild(precoProdutos)
  infoCard.appendChild(botaoProdutos)
}
