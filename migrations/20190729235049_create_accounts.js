exports.up = async function(knex) {
	return knex.schema.createTable('accounts', (table) => {
		table.increments('id').primary()
		table.string('type').notNull()
		table.string('currency').notNull()
		table.string('description').notNull()
		table.float('initial_value').notNull()
		table.float('current_value').notNull()
		table.integer('user_id').references('users.id')
	})
}

exports.down = async function(knex) {
	return knex.schema.dropTable('accounts')
}
