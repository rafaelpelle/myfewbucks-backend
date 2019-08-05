import { Request, Response, NextFunction } from 'express'
import { User } from '../../models/schema'

export const handleGetUser = async (req: Request, res: Response, next: NextFunction) => {
	const user = await User.query()
		.select('*')
		.where('cpf', req.query.cpf)
		.first()

	res.status(200).send({
		ok: true,
		user,
	})
}

export const handleUserRegistration = async (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({
		ok: true,
	})
}
