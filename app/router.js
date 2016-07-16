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
    this.route('intermediate', function() {
      this.route('css');
      this.route('images');
      this.route('application-hbs');
      this.route('workshop-notes');
    });
  });
});

export default Router;
