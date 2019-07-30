require('dotenv').config()
const { DATABASE_URL } = process.env

import { defaults } from 'pg'
defaults.ssl = false

export const client = 'pg'
export const connection = DATABASE_URL
