#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/7d9dbc4c5c7cf462610850b60353edcaf3c19b7c95abb881eeb2b38eaade2028/contract';
import endContract from '../../snapshots/7d9dbc4c5c7cf462610850b60353edcaf3c19b7c95abb881eeb2b38eaade2028/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/c194e58d37ab29f0c3d30f2838df264d495658f806c5f81165646edded04d8a8/contract';
import startContract from '../../snapshots/c194e58d37ab29f0c3d30f2838df264d495658f806c5f81165646edded04d8a8/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
