define [
    'Backbone'
    'Handlebars'
    'text!views/templates/AppViewTemplate.html'
],
(Backbone, Handlebars, Template) ->
    class AppView extends Backbone.View

        template: Template

        initialize: (options) ->
            @el = options.el

        render: ->
            @$el.html Handlebars.compile @template