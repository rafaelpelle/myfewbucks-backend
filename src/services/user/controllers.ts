import { Request, Response, NextFunction } from 'express'
const { User } = require('../../models/schema')

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	const users = await User.query()
	res.status(200).send({
		ok: true,
		users,
	})
}

export const getUserByCPF = async ({ query }: Request, res: Response) => {
	const user = await User.query().where('cpf', query.cpf)
	res.status(200).send({
		ok: true,
		user,
	})
}
