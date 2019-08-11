import { Request, Response, NextFunction } from 'express'
import { User } from '../models/schema'
import { HTTP400Error } from '../utils/httpErrors'
import { RequiredRegistrationParams, RegistrationValidators } from '../utils/interfaces'
import {
	validateCPF,
	validateName,
	validateEmail,
	validatePassword,
	validateBirthDate,
	validateGender,
} from '../utils/valueValidators'

export const validateGetUserParams = (req: Request, res: Response, next: NextFunction) => {
	if (!req.query.cpf) {
		throw new HTTP400Error('Missing CPF parameter')
	} else if (!validateCPF(req.query.cpf)) {
		throw new HTTP400Error('Invalid CPF parameter')
	} else {
		next()
	}
}

export const validateRegistrationParams = async (req: Request, res: Response, next: NextFunction) => {
	const requiredParams: RequiredRegistrationParams = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		birthDate: req.body.birthDate,
		gender: req.body.gender,
	}
	const valueValidators: RegistrationValidators = {
		name: validateName,
		email: validateEmail,
		password: validatePassword,
		birthDate: validateBirthDate,
		gender: validateGender,
	}

	Object.keys(requiredParams).forEach((key: string) => {
		const value = requiredParams[key]
		if (!value) {
			throw new HTTP400Error(`Missing parameter: ${key}.`)
		}
		if (!valueValidators[key](value)) {
			throw new HTTP400Error(`Invalid parameter: ${key}.`)
		}
	})

	const alreadyRegistered = await User.query().where('email', requiredParams.email)
	if (alreadyRegistered) {
		throw new HTTP400Error('E-mail already registered.')
	}

	next()
}
