exports.seed = async function(knex) {
	return knex('users')
		.del()
		.then(function() {
			return knex('users').insert([
				{
					name: 'Rafael Pelle',
					email: 'rafapelle@gmail.com',
					password: '12345678',
					gender: 'male',
					birth_date: '1992-10-23',
				},
				{
					name: 'Ana Maria Serafim',
					email: 'anamaria.serafim@gmail.com',
					password: '12345678',
					gender: 'female',
					birth_date: '1969-11-19',
				},
			])
		})
}
