var Tasks = (function(){
	return Backbone.Collection.extend({
		model: Task,
		getDone: function(){
			return this.where({done:true});
		}	
	});
})();