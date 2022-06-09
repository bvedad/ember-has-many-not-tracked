import Model, { hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
  @hasMany('unit', {async: true}) units;
}
