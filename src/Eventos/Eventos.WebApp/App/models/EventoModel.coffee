define [
    'Backbone'
],
(Backbone) ->
    class EventoModel extends Backbone.Model

        idAttribute: "Id"
        urlRoot:"api/eventos"