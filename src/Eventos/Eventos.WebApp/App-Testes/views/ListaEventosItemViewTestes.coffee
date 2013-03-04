define [ 
    'views/ListaEventosItemView'
], (ListaEventosItemView) ->

    element = $("<div></div>")
    subject = null
    model = new Backbone.Model()
    model.set
        "Id":7
        "Nome":"Evento 1"
        "Data":"2013-03-14T12:56:59.0934901-03:00"
        "QuantidadeVagas":100

    describe 'Lista Eventos Item View', ->

        beforeEach -> 
            subject = new ListaEventosItemView
                el:element
                model:model

        it 'deve ter um template', ->
            expect(subject.template).toBeDefined()

        it 'deve ter um el', ->
            expect(subject.$el).toBeDefined()

        it 'deve ter um model', ->
            expect(subject.model).toBeDefined()

        describe 'Ao renderizar', ->

            beforeEach ->
                subject.render()

            it 'deve exibir o id do evento', ->
                expect(subject.$el.html()).toContain('7')

            it 'deve exibir o nome do evento', ->
                expect(subject.$el.html()).toContain('Evento 1')

            it 'deve exibir a data do evento já formatada em pt-br', ->
                expect(subject.$el.html()).toContain('14/3/2013')

            it 'deve exibir as vagas do evento', ->
                expect(subject.$el.html()).toContain('100')