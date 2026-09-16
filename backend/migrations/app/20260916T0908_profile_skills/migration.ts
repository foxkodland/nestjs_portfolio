#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/590e13c95d23bd5fda52941cd32e8cef93ce29b2be14b4ab5af35d5178d96157/contract';
import endContract from '../../snapshots/590e13c95d23bd5fda52941cd32e8cef93ce29b2be14b4ab5af35d5178d96157/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
