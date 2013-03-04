(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'Handlebars', 'text!views/templates/AppViewTemplate.html'], function(Backbone, Handlebars, Template) {
    var AppView;
    return AppView = (function(_super) {

      __extends(AppView, _super);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.template = Template;

      AppView.prototype.initialize = function(options) {
        return this.el = options.el;
      };

      AppView.prototype.render = function() {
        return this.$el.html(Handlebars.compile(this.template));
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
