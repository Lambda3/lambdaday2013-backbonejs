(function() {

  define(['views/CadastroEventoView'], function(CadastroEventoView) {
    var element, subject;
    subject = null;
    element = $("<div></div>");
    return describe('Cadastro Evento View', function() {
      beforeEach(function() {
        spyOn(CadastroEventoView.prototype, 'exibirLista').andReturn();
        return subject = new CadastroEventoView({
          el: element
        });
      });
      it('deve ter um template', function() {
        return expect(subject.template).toBeDefined();
      });
      it('deve ter um el', function() {
        return expect(subject.$el).toBeDefined();
      });
      it('deve ter um model', function() {
        return expect(subject.model).toBeDefined();
      });
      describe('Ao renderizar', function() {
        beforeEach(function() {
          return subject.render();
        });
        return it('deve exibir formulário de cadastro', function() {
          return expect($("fieldset .form-actions", subject.el)).toBeDefined();
        });
      });
      describe('Ao preencher um campo', function() {
        return it('deve atualizar o modelo', function() {
          var campo;
          campo = $("#Nome", subject.el).val('Lambda Day');
          campo.blur();
          return expect(subject.model.get('Nome')).toBe('Lambda Day');
        });
      });
      describe('Ao salvar o modelo com sucesso', function() {
        beforeEach(function() {
          return spyOn($, "ajax").andCallFake(function(parametros) {
            return parametros.success({
              Id: 1,
              Nome: "Evento 1",
              Data: "2013-03-14T12:56:59.0934901-03:00",
              QuantidadeVagas: 100
            });
          });
        });
        return it('deve redirecionar para a listagem de eventos', function() {
          $("#salvar", subject.el).click();
          return expect(subject.exibirLista).toHaveBeenCalled();
        });
      });
      return describe('Ao salvar o modelo e der erro', function() {
        beforeEach(function() {
          return spyOn($, "ajax").andCallFake(function(parametros) {
            return parametros.success({
              status: 500
            });
          });
        });
        return it('deve exibir mensagem', function() {
          $("#salvar", subject.el).click();
          return expect($("div.alert-error")).not.toHaveClass('invisible');
        });
      });
    });
  });

}).call(this);
