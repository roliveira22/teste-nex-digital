module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Abacate',
          price: 21,
          path: 'https://mercadoorganico.com/6306-large_default/abacate-organico-un-osm.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('products', null, {})
  },
}
