const { Model } = require('objection')
import { User } from './user'
import { Account } from './account'
import { Reminder } from './reminder'

export class Transaction extends Model {
	static get tableName() {
		return 'transactions'
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'transactions.user_id',
					to: 'users.id',
				},
			},
			accounts: {
				relation: Model.BelongsToOneRelation,
				modelClass: Account,
				join: {
					from: 'transactions.account_id',
					to: 'accounts.id',
				},
			},
			reminders: {
				relation: Model.BelongsToOneRelation,
				modelClass: Reminder,
				join: {
					from: 'transactions.id',
					to: 'reminders.transaction_id',
				},
			},
		}
	}
}
