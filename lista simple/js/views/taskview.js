var TaskView = (function(){
	return Backbone.View.extend({
		initialize: function(){
			this.model.on("change", this.render, this);
		
		},
		template: _.template($("#tmpltask").html()),
		render: function(){
			$.extend(this.model.attributes, {id: this.model.cid});
			this.$el.html(this.template(this.model.toJSON()));
			return this;		
		},
		events: {		
			"click": function(){
				this.model.set("done", this.$el.find(":checked").length==1);
			}		
		}
	});

})();