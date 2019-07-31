exports.up = function(knex) {
	return knex.schema.createTable('transactions', (table) => {
		table.increments('id').primary()
		table.string('type').notNull()
		table.decimal('value', 50, 2).notNull()
		table.date('date').notNull()
		table.string('description').notNull()
		table.string('category').notNull()
		table.integer('user_id').references('users.id')
		table.integer('account_id').references('accounts.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('transactions')
}
