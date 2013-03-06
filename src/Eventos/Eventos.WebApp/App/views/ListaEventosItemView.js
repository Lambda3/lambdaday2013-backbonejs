(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'Handlebars', 'text!views/templates/ListaEventosItemViewTemplate.html'], function($, Backbone, Handlebars, Template) {
    var ListaEventosItemView;
    return ListaEventosItemView = (function(_super) {

      __extends(ListaEventosItemView, _super);

      function ListaEventosItemView() {
        return ListaEventosItemView.__super__.constructor.apply(this, arguments);
      }

      ListaEventosItemView.prototype.template = Template;

      ListaEventosItemView.prototype.render = function() {
        var context;
        context = Handlebars.compile(this.template);
        return this.$el.append(context(this.model.toJSON()));
      };

      return ListaEventosItemView;

    })(Backbone.View);
  });

}).call(this);
