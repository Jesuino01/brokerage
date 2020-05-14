
exports.up = function(knex) {
  return knex.schema.createTable('properties', function(table) {
    table.string('id').notNullable();
    table.string('titulo').notNullable();
    table.string('descricao');
    table.string('fotos');
    table.string('cep');
    table.string('cidade');
    table.string('logradouro');
    table.string('bairro');
    table.string('nro');
    table.string('metros');
    table.string('preco');
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('properties');
};
