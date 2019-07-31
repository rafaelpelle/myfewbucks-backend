exports.seed = async function(knex) {
	return knex('accounts')
		.del()
		.then(function() {
			return knex('accounts').insert([
				{
					user_id: '1',
					type: 'CreditCard',
					currency: 'BRL',
					description: 'Nubank',
					initial_value: 0,
					current_value: 0,
				},
				{
					user_id: '1',
					type: 'BankAccount',
					currency: 'BRL',
					description: 'Nuconta',
					initial_value: 0,
					current_value: 0,
				},
				{
					user_id: '2',
					type: 'CreditCard',
					currency: 'BRL',
					description: 'Nubank',
					initial_value: 0,
					current_value: 0,
				},
				{
					user_id: '2',
					type: 'Wallet',
					currency: 'BRL',
					description: 'Minha Carteira',
					initial_value: 0,
					current_value: 0,
				},
			])
		})
}
