import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _counter = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._counter;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}