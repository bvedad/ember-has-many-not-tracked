import { action, computed } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @action
  async addObject() {
    this.myList.removeObject(this.myList.lastObject);
  }

  // uncomment line below in order to make this work
  // @computed('model.account.units')
  get myList() {
    return this.model.account.units.toArray();
  }
}
