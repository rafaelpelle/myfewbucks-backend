import { validateGetUserParams, validateRegistrationParams } from '../../middleware/validators'
import { handleGetUser, handleUserRegistration } from './controllers'

export default [
	{
		path: '/user',
		method: 'get',
		handler: [validateGetUserParams, handleGetUser],
	},
	{
		path: '/user',
		method: 'post',
		handler: [validateRegistrationParams, handleUserRegistration],
	},
]
