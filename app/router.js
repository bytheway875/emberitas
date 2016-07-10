import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resources', function(){
    this.route('mac-installation');
  });
});

export default Router;
