App.Views.GrumblrFormView = Backbone.View.extend({

  el: '#grumble-form-modal',

  events: {
    'click span.new-grumble': 'newGrumble',
    'click .cancel' : 'hide',
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$('form')[0].reset()
  },

  hide: function(){
    App.Routers.main.navigate("");
    this.$el.hide();
  },

  show: function(){
    App.Routers.main.navigate("new");
    this.$el.show();
  },

  getFormData: function() {
    var data = {
      author: this.$("[name='author']").val(),
      avatar: this.$("[name='avatar']").val(),
      title: this.$("[name='title']").val(),
      content: this.$("[name='content']").val()
    };
    for (var key in data ){
      if (data[key] == ""){ delete data[key]; }
    }
    return data;
  },

  newGrumble: function(){
    var data = this.getFormData();

    this.collection.create(data, {
      success: function(model, response, options) {
        console.log(response);
      },
      error: function(){
        alert("Could not create grumble.");
      }
    });

    this.render();
    this.hide();
  },

});