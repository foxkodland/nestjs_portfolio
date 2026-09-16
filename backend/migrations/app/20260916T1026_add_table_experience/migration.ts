#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/b157772d747b649d1acd5d3304552028f340ba23e76baad5ab652678c708b801/contract';
import startContract from '../../snapshots/b157772d747b649d1acd5d3304552028f340ba23e76baad5ab652678c708b801/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/c194e58d37ab29f0c3d30f2838df264d495658f806c5f81165646edded04d8a8/contract';
import endContract from '../../snapshots/c194e58d37ab29f0c3d30f2838df264d495658f806c5f81165646edded04d8a8/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
