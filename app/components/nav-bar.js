import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nav-bar'],
  classNameBindings: ['hidden'],
  hidden: true,
  didInsertElement(){
    const _this = this;
    Ember.$(window).scroll(function(){
      var scroll = Ember.$(window).scrollTop();

		  if (scroll >= 300) {
        _this.set('hidden', false);
      } else {
        _this.set('hidden', true);
      }
    });
  }
})
