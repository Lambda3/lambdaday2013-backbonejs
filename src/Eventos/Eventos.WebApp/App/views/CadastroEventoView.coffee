define [
    'Backbone',
    'Handlebars'
    'text!views/templates/CadastroEventoViewTemplate.html'
    'models/EventoModel'
],
(Backbone, Handlebars, Template, EventoModel) ->
    class CadastroEventoView extends Backbone.View

        template:Template

        events: ->
            'blur input':'atualizarModelo'
            'click #salvar':'salvar'

        initialize: (options) ->
            @el = options.el
            @model = new EventoModel()
            @model.on "change:Id", @exibirLista, @
            @model.on "error", @exibirErro, @

        render: ->
            @$el.html Handlebars.compile @template

        atualizarModelo: (el) ->
            $el = $(el.target)
            @model.set $el.attr('id'), $el.val()

        salvar: ->
            @model.save()

        exibirLista :->
            window.location = ''

        exibirErro: ->
            divMensagem = @$("div.alert-error")
            divMensagem.removeClass 'invisible'