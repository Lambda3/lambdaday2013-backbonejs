define [
    'jquery'
    'Backbone'
    'views/AppView'
    'views/ListaEventosView'
    'views/CadastroEventoView'
],
($, Backbone, AppView, ListaEventosView, CadastroEventoView) ->
    class router extends Backbone.Router

        routes: 
            '':'home'
            'novo':'criarEvento'

        initialize: ->
            appView = new AppView
                el:$("#app-container")
            appView.render()
            Backbone.history.start()

        home: ->
            listaEventosView = new ListaEventosView
                el:$("#app-content")
            listaEventosView.render()

        criarEvento: ->
            cadastroView = new CadastroEventoView
                el:$("#app-content")
            cadastroView.render()