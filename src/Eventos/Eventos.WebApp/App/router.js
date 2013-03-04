(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'views/AppView', 'views/ListaEventosView', 'views/CadastroEventoView'], function(Backbone, AppView, ListaEventosView, CadastroEventoView) {
    var router;
    return router = (function(_super) {

      __extends(router, _super);

      function router() {
        return router.__super__.constructor.apply(this, arguments);
      }

      router.prototype.routes = {
        '': 'home',
        'novo': 'criarEvento'
      };

      router.prototype.initialize = function() {
        var appView;
        appView = new AppView({
          el: $("#app-container")
        });
        appView.render();
        return Backbone.history.start();
      };

      router.prototype.home = function() {
        var listaEventosView;
        listaEventosView = new ListaEventosView({
          el: $("#app-content")
        });
        return listaEventosView.render();
      };

      router.prototype.criarEvento = function() {
        var cadastroView;
        cadastroView = new CadastroEventoView({
          el: $("#app-content")
        });
        return cadastroView.render();
      };

      return router;

    })(Backbone.Router);
  });

}).call(this);
