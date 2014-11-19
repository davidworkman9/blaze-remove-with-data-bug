if (Meteor.isClient) {
  var i = 0;
  Template.withData.events({
    'click button': function () {
      Blaze.renderWithData(Template.renderMe, { i: ++i }, document.body);
    }
  });

  var x = 0;
  Template.withoutData.events({
    'click button': function () {
      var tmpl = Blaze.render(Template.renderMe, document.body).templateInstance();
      tmpl.$('.index').text(++x);
    }
  });

  Template.renderMe.events({
    'click .del': function (e, tmpl) {
      Blaze.remove(tmpl.view);
    }
  });
}
