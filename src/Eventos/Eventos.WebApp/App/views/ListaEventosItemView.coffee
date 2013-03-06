define [
    'jquery'
    'Backbone'
    'Handlebars'
    'text!views/templates/ListaEventosItemViewTemplate.html'
],
($, Backbone, Handlebars, Template) ->
    class ListaEventosItemView extends Backbone.View

        template: Template

        render: ->
            context = Handlebars.compile @template
            @$el.append context @model.toJSON()