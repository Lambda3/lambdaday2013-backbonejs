(function() {

  define(['views/AppView'], function(AppView) {
    var element, subject;
    subject = null;
    element = $("<div></div>");
    return describe('App View', function() {
      beforeEach(function() {
        return subject = new AppView({
          el: element
        });
      });
      it('deve ter um template', function() {
        return expect(subject.template).toBeDefined();
      });
      it('deve ter um el', function() {
        return expect(subject.$el).toBeDefined();
      });
      return describe('Ao renderizar', function() {
        beforeEach(function() {
          return subject.render();
        });
        return it('deve exibir cabeçalho', function() {
          return expect(subject.$el.html()).toContain('Eventos');
        });
      });
    });
  });

}).call(this);
