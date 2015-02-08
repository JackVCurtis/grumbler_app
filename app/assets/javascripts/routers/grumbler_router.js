App.Routers.Main = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'new' : 'showNewForm',
    'grumbles/:id': 'showGrumble',
    'grumbles/:id/edit': 'editGrumble',
    'author/:author': 'showAuthor'
  },  

  index: function() {
    App.Views.grumbleListView.unfilter();
  },

  showNewForm: function() {
    App.Views.grumbleFormView.show();
  },

  showGrumble: function(id) {
    App.Views.grumbleListView.filterByID(id);
  },

  showAuthor: function(author){
    App.Views.grumbleListView.filterByAuthor(author);
  },

  editGrumble: function(id){
    App.Views.grumbleListView.editByID(id);
  },

  initialize: function() {
    // Instantiate grumbles collection.
    App.Collections.grumbles = new App.Collections.Grumblrs();

    // Instantiate grumble form view, pass collection to it
    App.Views.grumbleFormView = new App.Views.GrumblrFormView({collection: App.Collections.grumbles});

    // Instantiate grumble collection view, pass collection to it
    App.Views.grumbleListView = new App.Views.GrumblrsView({collection: App.Collections.grumbles, form: App.Views.grumbleFormView});

    App.Collections.grumbles.fetch();
  }

});