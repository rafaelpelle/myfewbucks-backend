CREATE TYPE "gender_type" AS ENUM (
  'male',
  'female',
  'other'
);

CREATE TYPE "currency_type" AS ENUM (
  'BRL',
  'USD',
  'EUR'
);

CREATE TYPE "account_type" AS ENUM (
  'Wallet',
  'BankAccount',
  'CreditCard'
);

CREATE TYPE "transaction_type" AS ENUM (
  'income',
  'expense'
);

CREATE TYPE "category_type" AS ENUM (
  'transport',
  'recreation',
  'habitation',
  'services',
  'market',
  'work',
  'other'
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "cpf" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "gender" "gender_type" NOT NULL,
  "birth_date" date NOT NULL
);

CREATE TABLE "accounts" (
  "user_id" int NOT NULL,
  "id" int PRIMARY KEY,
  "type" varchar NOT NULL,
  "currency" "currency_type" NOT NULL,
  "description" varchar NOT NULL,
  "initial_value" float NOT NULL DEFAULT 0,
  "current_value" float NOT NULL DEFAULT 0
);

CREATE TABLE "transactions" (
  "id" int PRIMARY KEY,
  "type" "transaction_type" NOT NULL,
  "value" float NOT NULL,
  "t_date" date NOT NULL,
  "description" varchar NOT NULL,
  "category" "category_type" NOT NULL,
  "user_id" int NOT NULL,
  "account_id" int NOT NULL
);

CREATE TABLE "budgets" (
  "id" int PRIMARY KEY,
  "value" float NOT NULL,
  "category" "category_type" NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "reminders" (
  "id" int PRIMARY KEY,
  "user_id" int NOT NULL,
  "transaction_id" int NOT NULL
);

ALTER TABLE "accounts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("account_id") REFERENCES "accounts" ("id");

ALTER TABLE "budgets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reminders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reminders" ADD FOREIGN KEY ("transaction_id") REFERENCES "transactions" ("id");