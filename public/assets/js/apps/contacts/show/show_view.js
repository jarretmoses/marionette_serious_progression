ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.MissingContact = Marionette.ItemView.extend({
    template: "#missing-contact-view"
  });

  Show.Contact = Marionette.ItemView.extend({
    template: "#contact-view",

    events: {
      "click a.js-edit": "editClicked"
    },

    editClicked: function(e){
      e.preventDefault();
      this.trigger("contact:edit", this.model);
    },

    serializeData: function() {

      var attr = _.clone(this.model.attributes);
      attr.avatarUrl = attr['avatar-url'];

      delete attr['avatar-url'];
      console.log(attr);
      return attr;
    }
  });
});
