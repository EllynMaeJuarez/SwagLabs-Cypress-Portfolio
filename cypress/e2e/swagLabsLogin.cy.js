describe('Swag Labs Login Tests', () => {
  it('Should login successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com'); // Navigate to the Swag Labs website
    cy.get('#user-name').type('standard_user'); // Enter username
    cy.get('#password').type('secret_sauce'); // Enter password
    cy.get('#login-button').click(); // Click the login button
    cy.url().should('include', '/inventory.html'); // Verify login was successful by checking the URL
  });

  // it('Should display error for invalid credentials', () => {
  //   cy.visit('https://www.saucedemo.com'); // Open Swag Labs again
  //   cy.get('#user-name').type('invalid_user'); // Enter incorrect username
  //   cy.get('#password').type('wrong_password'); // Enter incorrect password
  //   cy.get('#login-button').click(); // Click the login button
  //   cy.get('.error-message-container').should('be.visible') // Verify an error message is displayed
  // });
});