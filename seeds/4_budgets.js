exports.seed = async function(knex) {
	return knex('budgets')
		.del()
		.then(function() {
			return knex('budgets').insert([
				{
					category: 'Transport',
					value: 200.0,
					user_id: '1',
				},
				{
					category: 'Market',
					value: 500.0,
					user_id: '1',
				},
				{
					category: 'Recreation',
					value: 200.0,
					user_id: '2',
				},
				{
					category: 'Habitation',
					value: 500.0,
					user_id: '2',
				},
			])
		})
}
