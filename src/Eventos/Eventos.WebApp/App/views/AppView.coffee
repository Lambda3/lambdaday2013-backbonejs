define [
    'jquery'
    'Backbone'
    'Handlebars'
    'text!views/templates/AppViewTemplate.html'
],
($, Backbone, Handlebars, Template) ->
    class AppView extends Backbone.View

        template: Template

        render: ->
            @$el.html Handlebars.compile @template