const { Model } = require('objection')
import { User } from './user'
import { Transaction } from './transaction'

export class Account extends Model {
	static get tableName() {
		return 'accounts'
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'accounts.user_id',
					to: 'users.id',
				},
			},
			transactions: {
				relation: Model.HasManyRelation,
				modelClass: Transaction,
				join: {
					from: 'accounts.id',
					to: 'transactions.account_id',
				},
			},
		}
	}
}
