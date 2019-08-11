import { Request, Response, NextFunction } from 'express'
import { User } from '../../models/schema'
import { RequiredRegistrationParams } from '../../utils/interfaces'

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
	const user = await User.query().insert({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		birthDate: req.body.birthDate,
		gender: req.body.gender,
	})

	res.status(200).send({
		ok: true,
		data: user,
	})
}
