import { removeNonNumericCharacters } from './stringParser'
import { Gender } from './interfaces'

export const validateName = (name: string): boolean => {
	return name.length >= 1
}

export const validateEmail = (email: string): boolean => {
	const format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return format.test(String(email).toLowerCase())
}

export const validatePassword = (password: string): boolean => {
	return password.length >= 8
}

export const validateGender = (gender: Gender): boolean => {
	return gender === 'male' || gender === 'female' || gender === 'other'
}

export const validateBirthDate = (birthDate: string): boolean => {
	const birth = new Date(birthDate)
	const now = new Date()
	const tooOld = new Date('1900-01-01')
	return tooOld < birth && birth < now
}

export const validatePhoneNumber = (number: string): boolean => {
	return number.length === 10 || number.length === 11
}

export const validateCPF = (cpf: string): boolean => {
	cpf = removeNonNumericCharacters(cpf)
	let sum
	let remainder
	sum = 0
	if (/^(.)\1+$/.test(cpf)) {
		return false
	}
	for (let i = 1; i <= 9; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (11 - i)
	}
	remainder = (sum * 10) % 11
	if (remainder === 10 || remainder === 11) {
		remainder = 0
	}
	if (remainder !== parseInt(cpf.substring(9, 10), undefined)) {
		return false
	}
	sum = 0
	for (let i = 1; i <= 10; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (12 - i)
	}
	remainder = (sum * 10) % 11
	if (remainder === 10 || remainder === 11) {
		remainder = 0
	}
	return remainder === parseInt(cpf.substring(10, 11), undefined)
}
