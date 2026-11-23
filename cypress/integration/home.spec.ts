describe('Home screenshot', () => {
    it('should take a screenshot of the home page', () => {
      cy.visit('/introduction');
      cy.matchImageSnapshot('home');
    });
  });
  
  