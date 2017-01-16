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

    this.route('beginner', function() {
      this.route('part-one');
      this.route('part-two');
      this.route('mockups-and-colors');
      this.route('stylesheet');
      this.route('new-palette-markup');
    });

    this.route('basics', function() {
      this.route('html-tags');
    });
  });
});

export default Router;
