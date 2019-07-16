
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '1', make: 'Ford', model: 'Taurus', mileage: '1'},
        {id: 2, VIN: '2', make: 'Ford', model: 'Taurus', mileage: '2'},
        {id: 3, VIN: '3', make: 'Ford', model: 'Taurus', mileage: '3'},
      ]);
    });
};
