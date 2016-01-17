var AppRouter	= Backbone.Router.extend({

	routes:{
		""	: "List",
		'menu/new' : 'ItemNew',
		'menu/:id': 'Details'
	},

	List: function(){
		$("#append").html("Welcome to List");
	},

	ItemNew : function(){
		$("#append").html("Can Add New Item Here");
	},

	Details : function( id ){
		$("#append").html("You are In " + id + " Page");
	}

});


 var App = new AppRouter();

	Backbone.history.start();
