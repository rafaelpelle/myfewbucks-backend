exports.up = async function(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary()
		table.string('name').notNull()
		table.string('email').notNull()
		table.unique('email')
		table.string('password').notNull()
		table.string('gender').notNull()
		table.date('birthDate').notNull()
	})
}

exports.down = async function(knex) {
	return knex.schema.dropTable('users')
}
