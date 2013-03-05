(function() {

  define(['views/ListaEventosItemView'], function(ListaEventosItemView) {
    var element, model, subject;
    element = $("<div></div>");
    subject = null;
    model = new Backbone.Model();
    model.set({
      "Id": 7,
      "Nome": "Evento 1",
      "Data": "2013-03-14T12:56:59.0934901-03:00",
      "QuantidadeVagas": 100
    });
    return describe('Lista Eventos Item View', function() {
      beforeEach(function() {
        return subject = new ListaEventosItemView({
          el: element,
          model: model
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
      return describe('Ao renderizar', function() {
        beforeEach(function() {
          return subject.render();
        });
        it('deve exibir o id do evento', function() {
          return expect(subject.$el.html()).toContain('7');
        });
        it('deve exibir o nome do evento', function() {
          return expect(subject.$el.html()).toContain('Evento 1');
        });
        it('deve exibir a data do evento já formatada', function() {
          return expect(subject.$el.html()).toContain('3/14/2013');
        });
        return it('deve exibir as vagas do evento', function() {
          return expect(subject.$el.html()).toContain('100');
        });
      });
    });
  });

}).call(this);
