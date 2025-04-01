describe('Swag Labs - Cart Operations Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('TC_008: Validate adding items to the cart', () => {
    cy.get('.inventory_item').eq(0).find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('TC_009: Validate removing items from the cart', () => {
    cy.get('.inventory_item').eq(0).find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('not.exist');
  });

  it('TC_010: Validate clearing the cart', () => {
    cy.get('.inventory_item').eq(0).find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.inventory_item').eq(1).find('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').each(($el) => cy.wrap($el).find('button').click());
    cy.get('.cart_item').should('not.exist');
  });
});