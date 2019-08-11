export type Gender = 'male' | 'female' | 'other'

export interface RequiredRegistrationParams {
	name: string
	email: string
	password: string
	birthDate: string
	gender: Gender
	[key: string]: string
}

export interface RegistrationValidators {
	name: (name: string) => boolean
	email: (email: string) => boolean
	password: (password: string) => boolean
	birthDate: (birthDate: string) => boolean
	gender: (gender: Gender) => boolean
	[key: string]: any
}
