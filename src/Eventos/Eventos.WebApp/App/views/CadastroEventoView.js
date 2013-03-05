(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'Handlebars', 'text!views/templates/CadastroEventoViewTemplate.html', 'models/EventoModel'], function($, Backbone, Handlebars, Template, EventoModel) {
    var CadastroEventoView;
    return CadastroEventoView = (function(_super) {

      __extends(CadastroEventoView, _super);

      function CadastroEventoView() {
        return CadastroEventoView.__super__.constructor.apply(this, arguments);
      }

      CadastroEventoView.prototype.template = Template;

      CadastroEventoView.prototype.events = function() {
        return {
          'blur input': 'atualizarModelo',
          'click #salvar': 'salvar'
        };
      };

      CadastroEventoView.prototype.initialize = function(options) {
        this.el = options.el;
        this.model = new EventoModel();
        this.model.on("change:Id", this.exibirLista, this);
        return this.model.on("error", this.exibirErro, this);
      };

      CadastroEventoView.prototype.render = function() {
        return this.$el.html(Handlebars.compile(this.template));
      };

      CadastroEventoView.prototype.atualizarModelo = function(el) {
        var $el;
        $el = $(el.target);
        return this.model.set($el.attr('id'), $el.val());
      };

      CadastroEventoView.prototype.salvar = function() {
        return this.model.save();
      };

      CadastroEventoView.prototype.exibirLista = function() {
        return window.location = '#';
      };

      CadastroEventoView.prototype.exibirErro = function() {
        var divMensagem;
        divMensagem = this.$("div.alert-error");
        return divMensagem.removeClass('invisible');
      };

      return CadastroEventoView;

    })(Backbone.View);
  });

}).call(this);
