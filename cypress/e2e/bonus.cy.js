/// <reference types="cypress" />

/* describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the home page', () => {
    cy.get('nav a').contains('Home').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('[data-cy="home-page"]').should('exist');
  });

  it('should navigate to the about page', () => {
    cy.get('nav a').contains('About').click();
    cy.url().should('include', '/about');
    cy.get('[data-cy="about-page"]').should('exist');
  });

  it('should navigate to the contact page', () => {
    cy.get('nav a').contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.get('[data-cy="contact-page"]').should('exist');
  });

  it('should display the 404 page for non-existent routes', () => {
    cy.visit('/unknown', { failOnStatusCode: false });
    cy.get('[data-cy="404-page"]').should('exist');
  });
}); */

describe('Product Listing and Details', () => {

  it('should display a list of products', () => {
    cy.visit('http://localhost:5173/products');
    cy.get('[data-cy="product-list"]').should('exist');
    cy.get('[data-cy="product-item"]').should('have.length.greaterThan', 0);
  });

  // it('should navigate to product details page when a product is clicked', () => {
  //   cy.get('[data-cy="product-item"]').first().click();
  //   cy.url().should('include', '/products/');
  //   cy.get('[data-cy="product-details"]').should('exist');
  // });

  // it('should display the correct product details', () => {
  //   const productId = 1;
  //   cy.visit(`/products/${productId}`);
  //   cy.get('[data-cy="product-details"]').should('exist');
  //   cy.get('[data-cy="product-id"]').should('have.text', `Product ID: ${productId}`);
  //   // Add more assertions based on your product details structure
  // });

  // it('should display a 404 page for non-existent product details', () => {
  //   const nonExistentProductId = 999;
  //   cy.visit(`/products/${nonExistentProductId}`, { failOnStatusCode: false });
  //   cy.get('[data-cy="not-found"]').should('exist');
  // });
});