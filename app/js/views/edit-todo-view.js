BTCApp.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});
Ember.Handlebars.helper('edit-todo', BTCApp.EditTodoView);