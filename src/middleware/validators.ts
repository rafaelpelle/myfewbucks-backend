import { Request, Response, NextFunction } from 'express'
import { HTTP400Error } from '../utils/httpErrors'
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

export const validateRegistrationParams = (req: Request, res: Response, next: NextFunction) => {
	const requiredParams: any = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		birthDate: req.body.birthDate,
		gender: req.body.gender,
	}
	for (const param in requiredParams) {
		if (!requiredParams[param]) {
			throw new HTTP400Error(`Missing parameter: ${param}.`)
		}
		switch (param) {
			case 'name':
				if (!validateName(requiredParams.name)) {
					throw new HTTP400Error('Invalid "name" parameter.')
				}
		}
	}

	const nameIsValid = validateName(requiredParams.name)
	const emailIsValid = validateEmail(requiredParams.name)
	const passwordIsValid = validatePassword(requiredParams.password)
	const birthDateIsValid = validateBirthDate(requiredParams.birthDate)
	const genderIsValid = validateGender(requiredParams.gender)

	next()
}
