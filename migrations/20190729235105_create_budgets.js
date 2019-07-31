exports.up = function(knex) {
	return knex.schema.createTable('budgets', (table) => {
		table.increments('id').primary()
		table.string('category').notNull()
		table.integer('user_id').references('users.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('budgets')
}
