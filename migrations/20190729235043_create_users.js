exports.up = async function(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary()
		table.string('cpf').unique()
		table.string('name')
		table.string('email')
		table.string('gender')
		table.date('birth_date')
	})
}

exports.down = async function(knex) {
	return knex.schema.dropTable('users')
}
