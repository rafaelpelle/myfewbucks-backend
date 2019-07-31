exports.up = function(knex) {
	return knex.schema.createTable('reminders', (table) => {
		table.increments('id').primary()
		table.string('description').notNull()
		table.decimal('value', 50, 2).notNull()
		table.string('repeat').notNull()
		table.date('initial_date').notNull()
		table.integer('user_id').references('users.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('reminders')
}
