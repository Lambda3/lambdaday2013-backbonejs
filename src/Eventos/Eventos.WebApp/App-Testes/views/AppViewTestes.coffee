define [ 
    'views/AppView'
], (AppView) ->

    subject = null
    element = $("<div></div>")

    describe 'App View', ->

        beforeEach -> 
            subject = new AppView
                el:element

        it 'deve ter um template', ->
            expect(subject.template).toBeDefined()

        it 'deve ter um el', ->
            expect(subject.$el).toBeDefined()

        describe 'Ao renderizar', ->

            beforeEach ->
                subject.render()

            it 'deve exibir cabeçalho', ->

                expect(subject.$el.html()).toContain('Eventos')