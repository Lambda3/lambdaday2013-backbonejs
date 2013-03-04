define [ 
    'views/CadastroEventoView'
], (CadastroEventoView) ->

    subject = null
    element = $("<div></div>")

    describe 'Cadastro Evento View', ->

        beforeEach -> 
            spyOn(CadastroEventoView.prototype, 'exibirLista').andReturn()

            subject = new CadastroEventoView
                el:element

        it 'deve ter um template', ->
            expect(subject.template).toBeDefined()

        it 'deve ter um el', ->
            expect(subject.$el).toBeDefined()

        it 'deve ter um model', ->
            expect(subject.model).toBeDefined()

        describe 'Ao renderizar', ->

            beforeEach ->
                subject.render()

            it 'deve exibir formulário de cadastro', ->
                expect($("fieldset .form-actions", subject.el)).toBeDefined()

        describe 'Ao preencher um campo', ->

            it 'deve atualizar o modelo', ->
                campo = $("#Nome", subject.el).val('Lambda Day')
                campo.blur()
                expect(subject.model.get('Nome')).toBe('Lambda Day')

        describe 'Ao salvar o modelo com sucesso', ->

            beforeEach ->
                spyOn($, "ajax").andCallFake (parametros) ->
                    parametros.success
                        Id:1
                        Nome:"Evento 1"
                        Data:"2013-03-14T12:56:59.0934901-03:00"
                        QuantidadeVagas:100
                    parametros.then = (a)-> a.apply(@)
                    parametros

            it 'deve redirecionar para a listagem de eventos', ->
                $("#salvar", subject.el).click()
                expect(subject.exibirLista).toHaveBeenCalled()

        describe 'Ao salvar o modelo e der erro', ->

            beforeEach ->
                spyOn($, "ajax").andCallFake (parametros) ->
                    parametros.success({status:500})
                    parametros.then = (a)-> a.apply(@)
                    parametros

            it 'deve exibir mensagem', ->
                $("#salvar", subject.el).click()
                expect($("div.alert-error")).not.toHaveClass 'invisible'