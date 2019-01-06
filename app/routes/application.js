import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import config from 'heycarsten/config/environment';

export default Route.extend({
  headData: inject(),

  model() {
    return {
      year: new Date().getFullYear()
    };
  },

  // Kinda hacky :( - figure out why ember-meta doesn't use default meta here
  afterModel() {
    this.headData.setProperties(config['ember-meta']);
  }
});
