(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'Handlebars', 'text!views/templates/ListaEventosViewTemplate.html', 'models/EventosCollection', 'views/ListaEventosItemView'], function($, Backbone, Handlebars, Template, EventosCollection, ListaEventosItemView) {
    var ListaEventosView;
    return ListaEventosView = (function(_super) {

      __extends(ListaEventosView, _super);

      function ListaEventosView() {
        return ListaEventosView.__super__.constructor.apply(this, arguments);
      }

      ListaEventosView.prototype.template = Template;

      ListaEventosView.prototype.events = function() {
        return {
          'click #incluir-evento': 'criarEvento'
        };
      };

      ListaEventosView.prototype.initialize = function(options) {
        return this.collection = new EventosCollection();
      };

      ListaEventosView.prototype.render = function() {
        this.$el.empty();
        this.$el.html(Handlebars.compile(this.template));
        return this.obterEventos();
      };

      ListaEventosView.prototype.obterEventos = function() {
        var _this = this;
        return this.collection.fetch({
          success: function() {
            return _this.renderizarEventos();
          }
        });
      };

      ListaEventosView.prototype.renderizarEventos = function() {
        var _this = this;
        return this.collection.each(function(item) {
          var itemView;
          itemView = new ListaEventosItemView({
            el: $("#listaEventos tbody"),
            model: item
          });
          return itemView.render();
        });
      };

      ListaEventosView.prototype.criarEvento = function() {
        return Backbone.history.navigate('novo', {
          trigger: true
        });
      };

      return ListaEventosView;

    })(Backbone.View);
  });

}).call(this);
