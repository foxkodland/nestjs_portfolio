#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/7d9dbc4c5c7cf462610850b60353edcaf3c19b7c95abb881eeb2b38eaade2028/contract';
import startContract from '../../snapshots/7d9dbc4c5c7cf462610850b60353edcaf3c19b7c95abb881eeb2b38eaade2028/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/ee448ff140c114cb6d32ef6914f4e4a7f8f74aa3a0ff806c129120d30b00964b/contract';
import endContract from '../../snapshots/ee448ff140c114cb6d32ef6914f4e4a7f8f74aa3a0ff806c129120d30b00964b/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
