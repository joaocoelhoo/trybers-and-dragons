import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _counter = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._counter;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}