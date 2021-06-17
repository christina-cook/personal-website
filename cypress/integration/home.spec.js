describe('Coded by Christina Home Page', () => {
  const baseUrl = 'https://codedbychristina.com/';

  it('Should see welcome text displayed on the page', () => {
    cy.visit(baseUrl)
      .get('.home-title').should('exist').and('have.text', 'Hi! I\'m Christina')
  })
})
