describe('Swag Labs - Product Sorting Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('TC_004: Validate sorting by price (Low to High)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('.inventory_item_price').then((prices) => {
      const sortedPrices = [...prices].map((price) => parseFloat(price.textContent.replace('$', '')));
      expect(sortedPrices).to.deep.equal([...sortedPrices].sort((a, b) => a - b));
    });
  });

  it('TC_005: Validate sorting by price (High to Low)', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.get('.inventory_item_price').then((prices) => {
      const sortedPrices = [...prices].map((price) => parseFloat(price.textContent.replace('$', '')));
      expect(sortedPrices).to.deep.equal([...sortedPrices].sort((a, b) => b - a));
    });
  });

  it('TC_006: Validate sorting by name (A to Z)', () => {
    cy.get('[data-test="product-sort-container"]').select('az');
    cy.get('.inventory_item_name').then((names) => {
      const sortedNames = [...names].map((name) => name.textContent);
      expect(sortedNames).to.deep.equal([...sortedNames].sort());
    });
  });

  it('TC_007: Validate sorting by name (Z to A)', () => {
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('.inventory_item_name').then((names) => {
      const sortedNames = [...names].map((name) => name.textContent);
      expect(sortedNames).to.deep.equal([...sortedNames].sort().reverse());
    });
  });
});