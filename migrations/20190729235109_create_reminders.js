exports.up = function(knex) {}

exports.down = function(knex) {
	return Promise.all([knex.schema.dropTable('reminders')])
}
