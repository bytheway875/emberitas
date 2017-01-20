import Ember from 'ember';
import ResetRoute from 'emberitas/routes/reset-scroll';

export default ResetRoute.extend({
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
