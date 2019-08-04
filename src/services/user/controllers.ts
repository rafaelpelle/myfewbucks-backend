import { Request, Response, NextFunction } from 'express'
import { User, Account } from '../../models/schema'

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	const users = await User.query()

	res.status(200).send({
		ok: true,
		users,
	})
}

export const getUserByCPF = async (req: Request, res: Response, next: NextFunction) => {
	const user = await User.query()
		.select('*')
		.where('cpf', req.query.cpf)
		.first()

	res.status(200).send({
		ok: true,
		user,
	})
}

export const getAllUserAccounts = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = await User.query()
		.select('id')
		.where('cpf', req.query.cpf)
		.first()
	const accounts = await Account.query()
		.select('*')
		.where('user_id', id + 'sfud')
	res.status(200).send({
		ok: true,
		accounts,
	})
}
