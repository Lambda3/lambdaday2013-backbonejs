define [
    'Backbone'
    'Handlebars'
    'text!views/templates/ListaEventosItemViewTemplate.html'
],
(Backbone, Handlebars, Template) ->
    class ListaEventosItemView extends Backbone.View

        template: Template

        initialize: (options) ->
            @el = options.el
            @model = options.model

        render: ->
            context = Handlebars.compile @template
            @$el.append context @model.toJSON()