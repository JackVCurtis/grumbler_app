App.Views.GrumblrsView = Backbone.View.extend({
  el: '#grumble-list',

  events: {
    'click .add-grumble' : 'showForm',
    'click .next-page' : 'showNextPage'
  },

  initialize: function(options) {
    for (key in options) { this[key] = options[key]; }
    this.listenTo(this.collection, 'add', this.addOne)
    this.listenTo(this.collection, 'reset', this.addAll)

    this.views = [];
    this.page = 0;
    this.addAll();
  },

  addOne: function(grumble){
    var newGrumbleView = new App.Views.GrumblrView({ model: grumble });
    this.views.push(newGrumbleView);
    this.$el.append(newGrumbleView.el);
  },

  addAll: function(){
    this.collection.each(function(grumble){
      this.addOne(grumble);
    },this)
  },

  showNextPage: function(){
    var self = this;
    self.page += 1
    self.collection.fetch({
      data: {page: self.page},
      success: function(model, response, options){
        console.log(self);
        console.log(response);
        if (response.length > 0){
          console.log('inside if statement');
          for(var i = 0; i < response.length; i++){
            self.addOne(response[i]);
          }
        }
      }
    })
  },

  showForm: function(){
    this.form.show();
  },

  filterByID: function(id) {
    _.each(this.views, function(view){
      if (view.model.id != id) {
        view.$el.hide();
      }
    });
  },

  filterByAuthor: function(author) {
    _.each(this.views, function(view){
      if (view.model.get('author') != author){
        view.$el.hide();
      }
    })
  },

  editByCID: function(id) {
    _.each(this.views, function(view){
      if (view.model.id != id){
        view.edit();
      }
    })
  },

  unfilter: function() {
    this.$('.grumble').show();
  }
});
