define [ 
    'views/ListaEventosView'
], (ListaEventosView) ->

    subject = null
    element = $("<div></div>")

    describe 'Lista Eventos View', ->

        beforeEach -> 
            spyOn(ListaEventosView.prototype, 'criarEvento').andReturn()
            subject = new ListaEventosView
                el:element

        it 'deve ter um template', ->
            expect(subject.template).toBeDefined()

        it 'deve ter um el', ->
            expect(subject.$el).toBeDefined()

        it 'deve ter uma collection', ->
            expect(subject.collection).toBeDefined()

        describe 'Ao renderizar', ->

            beforeEach ->
                spyOn($, "ajax").andCallFake (parametros) ->
                    parametros.success({"Id":1,"Nome":"Evento 1","Data":"2013-03-14T12:56:59.0934901-03:00","QuantidadeVagas":100})
                    parametros.then = (a)-> a.apply(@)
                    parametros

                spyOn(Backbone.Collection.prototype, 'each').andReturn()

                subject.render()

            it 'deve exibir uma tabela que conterá todos os eventos cadastrados', ->
                expect($("#listaEventos", subject.el)).toBeDefined()

            it 'deve obter a lista de eventos e preencher a collection', ->
                expect(subject.collection.length).toBe(1)

            it 'deve iterar sobre os itens da collection para exibí-los', ->
                expect(subject.collection.each).toHaveBeenCalled()

        describe 'Ao clicar no botão "Novo evento"', ->

            it 'deve redirecionar para o formulário de cadastro', ->
                $("#incluir-evento", subject.el).click()
                expect(subject.criarEvento).toHaveBeenCalled()