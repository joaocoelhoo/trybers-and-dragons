import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _counter = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._counter;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}