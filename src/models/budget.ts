const { Model } = require('objection')
import { User } from './user'

export class Budget extends Model {
	static get tableName() {
		return 'budgets'
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'budgets.user_id',
					to: 'users.id',
				},
			},
		}
	}
}
