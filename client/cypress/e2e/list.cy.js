/// <reference types="cypress" />

describe('next-apollo-demo list page', () => {
  beforeEach(() => {
    cy.visit('/list');
    cy.intercept('POST', 'http://localhost:5000/graphql').as('getList')
  })

  it('loads list of 20 items on launch', () => {
    cy.wait('@getList');
    cy.get('.card').should('have.length', 20);
  })

  it('load list of next 20 items on click', () => {
    cy.wait('@getList');
    cy.get('.card').should('have.length', 20);
    cy.get('.loadMoreBtn').click();
    cy.wait('@getList');
    cy.get('.card').should('have.length', 40);
  })

})