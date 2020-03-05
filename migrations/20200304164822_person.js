
exports.up = function(knex) {
  return knex.schema.createTable('person',function(tbl){
      tbl.increments();
      tbl.string('FirstName',30).notNullable().defaultTo('n/a');
      tbl.string('LastName',30).notNullable().defaultTo('n/a');
      tbl.string('Junk',60).notNullable().defaultTo('n/a');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('person');
};
