import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitEmail(email){
      Ember.$('.email-button').addClass('sent');
      Ember.$('input.email').addClass('sent');
      // alert(email);
    }
  }
})
