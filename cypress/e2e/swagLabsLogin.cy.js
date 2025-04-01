describe('Swag Labs - Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('TC_001: Verify login with valid credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('TC_002: Verify login with invalid credentials', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('invalid_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
  
  it('TC_003: Verify login with blank credentials', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});