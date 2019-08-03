const { Model } = require('objection')
import { User } from './user'
import { Transaction } from './transaction'

export class Reminder extends Model {
	static get tableName() {
		return 'reminders'
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'reminders.user_id',
					to: 'users.id',
				},
			},
			transactions: {
				relation: Model.BelongsToOneRelation,
				modelClass: Transaction,
				join: {
					from: 'reminders.transaction_id',
					to: 'transactions.id',
				},
			},
		}
	}
}
