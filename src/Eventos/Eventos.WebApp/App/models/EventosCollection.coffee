define [
    'Backbone'
     'models/EventoModel'
],
(Backbone, EventoModel) ->
    class BackboneCollection extends Backbone.Collection
        
        url: '/api/eventos'
        model: EventoModel