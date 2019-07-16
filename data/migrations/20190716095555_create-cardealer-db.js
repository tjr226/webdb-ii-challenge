
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.integer('VIN').unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.text('transmission', 128);
        tbl.text('title_status', 128);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
