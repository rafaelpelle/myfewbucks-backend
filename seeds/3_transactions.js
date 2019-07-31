exports.seed = async function(knex) {
	return knex('transactions')
		.del()
		.then(function() {
			return knex('transactions').insert([
				{
					user_id: '1',
					account_id: '1',
					type: 'income',
					value: 100.9,
					date: '20191022',
					description: 'Alguma renda',
					category: 'Work',
				},
				{
					user_id: '1',
					account_id: '2',
					type: 'expense',
					value: 10.9,
					date: '20191023',
					description: 'Algum gasto',
					category: 'Transport',
				},
				{
					user_id: '2',
					account_id: '3',
					type: 'income',
					value: 100.9,
					date: '20191022',
					description: 'Alguma renda',
					category: 'Work',
				},
				{
					user_id: '2',
					account_id: '4',
					type: 'expense',
					value: 10.9,
					date: '20191023',
					description: 'Algum gasto',
					category: 'Transport',
				},
			])
		})
}
