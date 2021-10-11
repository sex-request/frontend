describe('Home', () => {
  it('should render index page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.contains('섹스 신청서');
  });
});
