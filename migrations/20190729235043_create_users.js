exports.up = async function(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary()
		table.string('cpf').unique()
		table.string('name').notNull()
		table.string('email').notNull()
		// table.string('password').notNull()
		table.string('gender').notNull()
		table.date('birth_date').notNull()
	})
}

exports.down = async function(knex) {
	return knex.schema.dropTable('users')
}
