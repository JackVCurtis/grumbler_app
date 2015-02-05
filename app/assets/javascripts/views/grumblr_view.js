App.Views.GrumblrView = Backbone.View.extend({
  className: 'grumble',

  events: {
    'click span.show': 'show',
    'click span.destroy': 'onDestroy',
    'click span.author' : 'showAuthor',
    'click .edit' : 'edit',
    'click .submit': 'change'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)

    var source = $("#grumble-template").html();
    this.template = Handlebars.compile(source);
    var formSource = $("#edit-grumble-template").html();
    this.editTemplate = Handlebars.compile(formSource);

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  onDestroy: function() {
    this.model.collection.remove(this.model);
    this.remove();
  },

  show: function() {
    App.Routers.main.navigate("grumbles/" + this.model.cid);
    App.Views.grumbleListView.filterByCID(this.model.cid);
  },

  showAuthor: function() {
    App.Routers.main.navigate("author/" + this.model.get("author"));
    App.Views.grumbleListView.filterByAuthor(this.model.get("author"));
  },

  edit: function(){
    App.Routers.main.navigate("grumbles/" + this.model.cid + "/edit")
    this.render();
    var html = this.editTemplate(this.model.attributes);
    this.$el.append(html);
  },

  change: function(){
     var data = {
      author: this.$("[name='author']").val(),
      avatar: this.$("[name='avatar']").val(),
      title: this.$("[name='title']").val(),
      content: this.$("[name='content']").val()
    };
    this.model.set( data );
    if ( !this.model.hasChanged() ) { 
      this.render(); 
    }
    App.Routers.main.navigate("");
  }

});
