(function() {

  define(['views/ListaEventosView'], function(ListaEventosView) {
    var element, subject;
    subject = null;
    element = $("<div></div>");
    return describe('Lista Eventos View', function() {
      beforeEach(function() {
        spyOn(ListaEventosView.prototype, 'criarEvento').andReturn();
        return subject = new ListaEventosView({
          el: element
        });
      });
      it('deve ter um template', function() {
        return expect(subject.template).toBeDefined();
      });
      it('deve ter um el', function() {
        return expect(subject.$el).toBeDefined();
      });
      it('deve ter uma collection', function() {
        return expect(subject.collection).toBeDefined();
      });
      describe('Ao renderizar', function() {
        beforeEach(function() {
          spyOn($, "ajax").andCallFake(function(parametros) {
            parametros.success({
              "Id": 1,
              "Nome": "Evento 1",
              "Data": "2013-03-14T12:56:59.0934901-03:00",
              "QuantidadeVagas": 100
            });
            parametros.then = function(a) {
              return a.apply(this);
            };
            return parametros;
          });
          spyOn(Backbone.Collection.prototype, 'each').andReturn();
          return subject.render();
        });
        it('deve exibir uma tabela que conterá todos os eventos cadastrados', function() {
          return expect($("#listaEventos", subject.el)).toBeDefined();
        });
        it('deve obter a lista de eventos e preencher a collection', function() {
          return expect(subject.collection.length).toBe(1);
        });
        return it('deve iterar sobre os itens da collection para exibí-los', function() {
          return expect(subject.collection.each).toHaveBeenCalled();
        });
      });
      return describe('Ao clicar no botão "Novo evento"', function() {
        return it('deve redirecionar para o formulário de cadastro', function() {
          $("#incluir-evento", subject.el).click();
          return expect(subject.criarEvento).toHaveBeenCalled();
        });
      });
    });
  });

}).call(this);
