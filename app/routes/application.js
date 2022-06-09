import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    return hash({
      account: this.store.findRecord('account', 1),
    });
  }
}
