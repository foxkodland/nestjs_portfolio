import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './contract.d';
import contractJson from './contract.json';

const db = postgres<Contract>({
  contractJson,
  url: process.env['DATABASE_URL']!,
});

// для краткости
export const schema = db.orm.public;