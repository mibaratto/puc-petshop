const listaProdutos = [
  {
    descricao: 'Lenços Umedecidos Pet Clean para Cães e Gatos - 75 unidades',
    imagem: './img/higiene_01.jpg',
    alt: 'imagem de chachorro tomando banho',
    preco: 'R$ 22,45',
  },
  {
    descricao: 'Shampoo Pet Society Beeps Branqueador - 500 ml',
    imagem: './img/higiene_02.jpg',
    alt: 'Peiteira Tradicional para cães',
    preco: 'R$ 32,22',
  },
  {
    descricao: 'Creme Dental Soft Care Suave Abrasão - 85g',
    imagem: './img/higiene_03.jpg',
    alt: 'Comedouro e Bebedouro Duplo Inox - 236 ml para cães',
    preco: 'R$ 11,30',
  },
]

const divRowProdutos = document.getElementById('higiene')

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
