﻿require.config

    paths:
        jquery: '../Scripts/jquery-1.9.1'
        jQueryUI: '../Scripts/jquery-ui-1.10.0'
        Underscore: '../Scripts/underscore'
        Backbone: '../Scripts/backbone'
        Handlebars: '../Scripts/handlebars'
        TwitterBootstrap: '../Scripts/bootstrap'
        text: '../Scripts/text'

    shim:
        'jQueryUI':
            deps: ['jquery']

        'Handlebars':
            deps: ['jquery']
            exports: 'Handlebars'

        'Underscore':
            exports: '_'

        'Backbone':
            deps: ['Underscore', 'jquery', 'Handlebars']
            exports: 'Backbone'

        'TwitterBootstrap':
            deps: ['jquery']

require [
    'Handlebars'
    'router'
],
(Handlebars, router) ->
    Handlebars.registerHelper 'formataData', (valor) ->
        return "" if not valor
        try
            data = new Date(valor)
            return data.getUTCDate() + "/" + (data.getUTCMonth() + 1) + "/" + data.getUTCFullYear()
        catch error
            return valor

    new router()
