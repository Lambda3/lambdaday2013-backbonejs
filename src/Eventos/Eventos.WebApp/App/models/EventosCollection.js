(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'models/EventoModel'], function(Backbone, EventoModel) {
    var BackboneCollection;
    return BackboneCollection = (function(_super) {

      __extends(BackboneCollection, _super);

      function BackboneCollection() {
        return BackboneCollection.__super__.constructor.apply(this, arguments);
      }

      BackboneCollection.prototype.url = '/api/eventos';

      BackboneCollection.prototype.model = EventoModel;

      return BackboneCollection;

    })(Backbone.Collection);
  });

}).call(this);
