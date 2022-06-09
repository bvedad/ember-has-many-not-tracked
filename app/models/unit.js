import Model, { hasMany } from '@ember-data/model';

export default class UnitModel extends Model {
  @hasMany('account', {async: true}) accounts;
}
