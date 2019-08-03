import { validateUserParams } from '../../middleware/validators'
import { getUserByCPF, getAllUsers, getAllUserAccounts } from './controllers'

export default [
	{
		path: '/allUsers',
		method: 'get',
		handler: [getAllUsers],
	},
	{
		path: '/user',
		method: 'get',
		handler: [validateUserParams, getUserByCPF],
	},
	{
		path: '/user/account',
		method: 'get',
		handler: [validateUserParams, getAllUserAccounts],
	},
]
