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
    var self = this;
    this.model.destroy({
      success: function(){
        self.remove();
      },
      error: function(){
        alert("Could not delete grumble.");
      }
    });
  },

  show: function() {
    App.Routers.main.navigate("grumbles/" + this.model.id);
    App.Views.grumbleListView.filterByID(this.model.id);
  },

  showAuthor: function() {
    App.Routers.main.navigate("author/" + this.model.get("author"));
    App.Views.grumbleListView.filterByAuthor(this.model.get("author"));
  },

  edit: function(){
    App.Routers.main.navigate("grumbles/" + this.model.id + "/edit")
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
    this.model.save({
      success: function(model, response, options){
        console.log(response);
      },
      error: function(){
        alert("Could not edit grumble.");
      }
    });
    if ( !this.model.hasChanged() ) { 
      this.render(); 
    }
    App.Routers.main.navigate("");
  }

});
