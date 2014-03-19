var TasksView = (function(){
	return Backbone.View.extend({
		initialize: function(){
			this.collection.on("change add", this.render, this);
		},
		tagName: "ul",
		renderDone: function(){
			this.$el.empty();
			_.each(this.collection.getDone(), this.fillList, this);
			return this;
		},
		render: function(done){
			this.$el.empty();
			this.collection.each(this.fillList, this);
			return this;
		},
		fillList: function(task){
			var taskview = new TaskView({model: task});
			this.$el.append(taskview.render().el);				
		}
	});
})();