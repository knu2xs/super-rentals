import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  esriLoader: service(),

  renderTemplate(){

    this._super(...arguments);

    this.get('esriLoader').loadScript();

  }

});
