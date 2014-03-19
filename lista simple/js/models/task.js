var Task = (function(){
	return Backbone.Model.extend({
		defaults: {
			done: false
		},
		validate: function(attributes){
			if(attributes.name.length===0) return "Name is required";
		}	
	});
})();