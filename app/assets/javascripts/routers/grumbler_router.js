App.Routers.Main = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'new' : 'showNewForm',
    'grumbles/:cid': 'showGrumble',
    'grumbles/:cid/edit': 'editGrumble',
    'author/:author': 'showAuthor'
  },  

  index: function() {
    App.Views.grumbleListView.unfilter();
  },

  showNewForm: function() {
    App.Views.grumbleFormView.show();
  },

  showGrumble: function(cid) {
    App.Views.grumbleListView.filterByCID(cid);
  },

  showAuthor: function(author){
    App.Views.grumbleListView.filterByAuthor(author);
  },

  editGrumble: function(cid){
    App.Views.grumbleListView.editByCID(cid);
  },

  initialize: function() {
    // Instantiate grumbles collection.
    App.Collections.grumbles = new App.Collections.Grumblrs();

    // Instantiate grumble form view, pass collection to it
    App.Views.grumbleFormView = new App.Views.GrumblrFormView({collection: App.Collections.grumbles});

    // Instantiate grumble collection view, pass collection to it
    App.Views.grumbleListView = new App.Views.GrumblrsView({collection: App.Collections.grumbles, form: App.Views.grumbleFormView});

    App.Collections.grumbles.reset();
    App.Collections.grumbles.add({title: "Routers are the best", author: "Adam", avatar: "http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg", content: "Meditation Schlitz mlkshk, keytar pug food truck High Life +1 heirloom chambray master cleanse. 90's paleo stumptown, YOLO crucifix tousled chambray disrupt fixie. Williamsburg yr polaroid actually pork belly, Kickstarter cardigan bitters Wes Anderson banh mi mixtape Pinterest post-ironic gluten-free. Banjo viral letterpress gluten-free, plaid Truffaut 8-bit deep v meh. Echo Park pork belly ennui gluten-free Shoreditch twee, Blue Bottle salvia distillery pug McSweeney's meditation. Chambray beard fap typewriter disrupt gastropub mlkshk, chillwave narwhal fixie PBR&B Thundercats readymade farm-to-table keffiyeh. Fingerstache cronut VHS ennui art party organic."});
    App.Collections.grumbles.add({title: "No, Views are the best!", author: "Sean", avatar: "http://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2014/09/Grumpy_Cat_Endors...", content: "Mlkshk DIY mixtape Etsy Thundercats, Odd Future craft beer migas brunch Intelligentsia fashion axe you probably haven't heard of them dreamcatcher hashtag. Drinking vinegar jean shorts disrupt, Austin umami Wes Anderson 8-bit. Shoreditch forage bicycle rights post-ironic, single-origin coffee photo booth four dollar toast asymmetrical. Selvage wayfarers mlkshk tousled mustache semiotics taxidermy. Fap artisan cronut, gluten-free Kickstarter next level 8-bit Intelligentsia pug PBR. Listicle Bushwick small batch, +1 before they sold out mustache retro post-ironic sartorial. Whatever tote bag craft beer, bespoke listicle Bushwick Vice small batch swag squid ethical street art beard Austin narwhal."});
    App.Collections.grumbles.add({title: "No, Models are the best!", author: "Jesse", avatar: "https://www.petfinder.com/wp-content/uploads/2012/11/99059361-choose-cat-litter-632x475.jpg", content: "Bicycle rights keffiyeh pork belly street art sartorial Thundercats. Locavore YOLO brunch, four loko Etsy taxidermy Kickstarter forage single-origin coffee VHS Blue Bottle meh letterpress. Banjo messenger bag literally, gastropub cardigan selfies chillwave viral leggings XOXO forage. Tote bag photo booth small batch bitters fanny pack, wayfarers Helvetica farm-to-table. Asymmetrical stumptown paleo, VHS 8-bit chambray artisan American Apparel kale chips iPhone Neutra kitsch. Ugh pickled gluten-free ethical, yr +1 irony mustache blog put a bird on it. Before they sold out Vice 3 wolf moon brunch pour-over single-origin coffee Brooklyn."});
    App.Collections.grumbles.add({title: "No, Broad City is the best!", author: "Pam", avatar: "http://animalia-life.com/data_images/wallpaper/cat-wallpaper/cat-wallpaper-01.jpg", content: "Ethical fashion axe bicycle rights +1 normcore, Shoreditch YOLO typewriter semiotics cold-pressed Brooklyn you probably haven't heard of them. Gastropub Vice try-hard, banh mi cardigan aesthetic fap skateboard Etsy Williamsburg mumblecore meggings. Mlkshk paleo Neutra, chambray lomo keffiyeh viral +1 occupy shabby chic put a bird on it scenester meh. Selvage four loko cliche paleo sustainable beard. Banh mi Carles selfies before they sold out, American Apparel Portland cornhole photo booth paleo aesthetic mlkshk. VHS banjo lumbersexual fixie. Taxidermy cred leggings occupy, brunch meh bitters mlkshk vegan fanny pack Intelligentsia flexitarian."});
  }

});