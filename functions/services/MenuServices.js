const MenuServices = {
  bebidas: {
    semAlcool: {
      suco: [{id: 1, name: 'Suco de Laranja', price: 3.50}, {id: 2, name: 'Suco de Maçã', price: 3.00}],
      refrigirante: [{id: 1, name: 'Coca-Cola', price: 2.50}, {id: 2, name: 'Pepsi', price: 2.00}],
    },
    comAlcool: {
      caipirinha: [{id: 1, name: 'Caipirinha de Limão', price: 8.00}, {
        id: 2,
        name: 'Caipirinha de Morango',
        price: 9.00
      }],
      dose: [{id: 1, name: 'Vodka', price: 5.00}, {id: 2, name: 'Whisky', price: 7.00}],
      batida: [{id: 1, name: 'Batida de Coco', price: 6.00}, {id: 2, name: 'Batida de Abacaxi', price: 6.00}],
      cerveja: [{id: 1, name: 'Heineken', price: 4.50}, {id: 2, name: 'Budweiser', price: 4.00}],
    },
  },
  comidas: [{id: 1, name: 'Hamburguer', price: 10.00}, {id: 2, name: 'Pizza', price: 12.00}],
  adicionaisParaLanche: [{id: 1, name: 'Bacon', price: 1.50}, {id: 2, name: 'Ovo', price: 1.00}],
  sobreMesa: [{id: 1, name: 'Sorvete', price: 4.00}, {id: 2, name: 'Torta de Chocolate', price: 5.00}],
}

module.exports = {
  MenuServices,
};
