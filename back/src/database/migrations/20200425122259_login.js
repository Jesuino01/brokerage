
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.string('id').notNullable();
    table.string('name').notNullable();
    table.string('login').notNullable();
    table.string('pass').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
