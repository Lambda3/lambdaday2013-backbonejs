(function() {

  require.config({
    baseUrl: "/App",
    paths: {
      jquery: '../Scripts/jquery-1.9.1',
      jQueryUI: '../Scripts/jquery-ui-1.10.0',
      Underscore: '../Scripts/underscore',
      Backbone: '../Scripts/backbone',
      Handlebars: '../Scripts/handlebars',
      TwitterBootstrap: '../Scripts/bootstrap',
      text: '../Scripts/text'
    },
    shim: {
      'jQueryUI': {
        deps: ['jquery']
      },
      'Handlebars': {
        deps: ['jquery'],
        exports: 'Handlebars'
      },
      'Underscore': {
        exports: '_'
      },
      'Backbone': {
        deps: ['Underscore', 'jquery', 'Handlebars'],
        exports: 'Backbone'
      },
      'TwitterBootstrap': {
        deps: ['jquery']
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
