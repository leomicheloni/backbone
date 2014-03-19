var Router = (function(){
	return Backbone.Router.extend({
		routes:{
			"index": "",
			"list": "list",
			"show/:id": "show"
		}
	
	});

})();