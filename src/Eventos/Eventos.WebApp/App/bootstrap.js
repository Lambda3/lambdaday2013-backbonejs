(function() {

  require.config({
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

  require(['Handlebars', 'router'], function(Handlebars, router) {
    Handlebars.registerHelper('formataData', function(valor) {
      var data;
      if (!valor) {
        return "";
      }
      try {
        data = new Date(valor);
        return (data.getUTCMonth() + 1) + "/" + data.getUTCDate() + "/" + data.getUTCFullYear();
      } catch (error) {
        return valor;
      }
    });
    return new router();
  });

}).call(this);
