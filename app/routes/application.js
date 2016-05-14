import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('interest');
  },
  actions: {
    showInterest(model){
      Ember.$('.email-button').addClass('sent');
      Ember.$('input.email').addClass('sent');
      model.save();
      model.set('email', '');
    }
  }
})
