﻿(function() {

  require.config({
    baseUrl: "/App",
    paths: {
      jQuery: '../Scripts/jquery-1.9.1.min',
      jQueryUI: '../Scripts/jquery-ui-1.10.0.min',
      Underscore: '../Scripts/underscore.min',
      Backbone: '../Scripts/backbone.min',
      Handlebars: '../Scripts/handlebars.min',
      TwitterBootstrap: '../Scripts/bootstrap.min',
      text: '../Scripts/text'
    },
    shim: {
      'jQuery': {
        exports: '$'
      },
      'jQueryUI': {
        deps: ['jQuery']
      },
      'Handlebars': {
        deps: ['jQuery'],
        exports: 'Handlebars'
      },
      'Underscore': {
        exports: '_'
      },
      'Backbone': {
        deps: ['Underscore', 'jQuery', 'Handlebars'],
        exports: 'Backbone'
      },
      'TwitterBootstrap': {
        deps: ['jQuery']
      }
    }
  });

  require(['Handlebars', '../App-Testes/views/AppViewTestes', '../App-Testes/views/ListaEventosViewTestes', '../App-Testes/views/ListaEventosItemViewTestes', '../App-Testes/views/CadastroEventoViewTestes'], function(Handlebars) {
    var currentWindowOnload, htmlReporter, jasmineEnv;
    Handlebars.registerHelper('formataData', function(valor) {
      var data;
      if (!valor) {
        return "";
      }
      try {
        data = new Date(valor);
        return data.getUTCDate() + "/" + (data.getUTCMonth() + 1) + "/" + data.getUTCFullYear();
      } catch (error) {
        return valor;
      }
    });
    jasmineEnv = jasmine.getEnv();
    htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    currentWindowOnload = window.onload;
    return jasmineEnv.execute();
  });

}).call(this);
