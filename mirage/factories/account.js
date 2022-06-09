import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  withUnits: trait({
    afterCreate(account, server) {
      server.createList('unit', 3, { accounts: [account] });
    },
  }),
});
