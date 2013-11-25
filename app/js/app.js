window.BTCApp = Ember.Application.create();
BTCApp.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'btcapp-todos'
});
