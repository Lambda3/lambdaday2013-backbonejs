define [
    'Backbone'
    'Handlebars'
    'text!views/templates/ListaEventosViewTemplate.html'
    'models/EventosCollection'
    'views/ListaEventosItemView'
],
(Backbione, Handlebars, Template, EventosCollection, ListaEventosItemView) ->
    class ListaEventosView extends Backbone.View

        template: Template

        events: ->
            'click #incluir-evento':'criarEvento'

        initialize: (options) ->
            @el = options.el
            @collection = new EventosCollection()

        render: ->
            @$el.empty()
            @$el.html Handlebars.compile @template
            @obterEventos()

        obterEventos: ->
            @collection.fetch
                success: =>
                    @renderizarEventos()

        renderizarEventos: ->
            @collection.each (item) =>
                itemView = new ListaEventosItemView
                    el:$("#listaEventos tbody")
                    model:item
                itemView.render()

        criarEvento: ->
            window.location ='#novo'