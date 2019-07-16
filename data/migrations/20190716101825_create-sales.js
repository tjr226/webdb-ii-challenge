
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
      tbl.increments('id');
      tbl.foreign('car_id').references('id').inTable('cars').notNullable();
      tbl.string('salesperson').notNullable();
      tbl.decimal('amount', 2).notNullable();
  })
};

exports.down = function(knex) {
  
};
