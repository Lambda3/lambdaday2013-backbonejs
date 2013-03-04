(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var EventoModel;
    return EventoModel = (function(_super) {

      __extends(EventoModel, _super);

      function EventoModel() {
        return EventoModel.__super__.constructor.apply(this, arguments);
      }

      EventoModel.prototype.idAttribute = "Id";

      EventoModel.prototype.urlRoot = "api/eventos";

      return EventoModel;

    })(Backbone.Model);
  });

}).call(this);
