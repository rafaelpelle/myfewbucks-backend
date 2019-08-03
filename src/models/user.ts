const { Model } = require('objection')
import { Account } from './account'
import { Transaction } from './transaction'

export class User extends Model {
	static get tableName() {
		return 'users'
	}

	static get relationMappings() {
		return {
			accounts: {
				relation: Model.HasManyRelation,
				modelClass: Account,
				join: {
					from: 'users.id',
					to: 'accounts.user_id',
				},
			},
			transactions: {
				relation: Model.HasManyRelation,
				modelClass: Transaction,
				join: {
					from: 'users.id',
					to: 'transactions.user_id',
				},
			},
		}
	}
}
