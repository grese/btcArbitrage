BTCApp.Router.map(function(){
	this.resource('todos', { path: '/' }, function(){
		// additional child routes...
		this.route('active');
		this.route('completed');
	});
	
});

BTCApp.TodosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('todo');
	}
});

BTCApp.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});
BTCApp.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render('todos/index', {controller: controller});
	}
});
BTCApp.TodosCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});