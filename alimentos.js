const listaProdutos = [
  {
    descricao: 'Ração Seca Tropical Corideiro Cães Adultos - 2kg',
    imagem: './img/racao_01.jpg',
    alt: 'imagem de uma embalagem com lenços umedeciodos para cães',
    preco: 'R$ 80,45',
  },
  {
    descricao: 'Ração Frango e Carne para Cães Adultos - 20kg',
    imagem: './img/racao_02.jpg',
    alt: 'imagem de uma Peiteira Tradicional para cães',
    preco: 'R$ 145,22',
  },
  {
    descricao: 'Ração Premiun Cães Adultos Grandes - 20kg',
    imagem: './img/racao_03.jpg',
    alt: ' Imagem de brinquedo para gatos tipo varinha',
    preco: 'R$ 250,30',
  },
]

const divRowProdutos = document.getElementById('promocoes')

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

console.log('oi')
