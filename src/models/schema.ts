import { Account } from './account'
import { Budget } from './budget'
import { Reminder } from './reminder'
import { Transaction } from './transaction'
import { User } from './user'

const Knex = require('knex')
const connection = require('../../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)
Model.knex(knexConnection)

module.exports = { Account, Budget, Reminder, Transaction, User }
