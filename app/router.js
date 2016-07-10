import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('schedule')
  this.route('resources', function(){
    this.route('installation', function(){
      this.route('mac');
      this.route('ubuntu');
      this.route('windows');
    });
  });
});

export default Router;
