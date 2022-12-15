/// <reference types="cypress" />

describe('next-apollo-demo about page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('displays about title', () => {
    cy.get('.title').should('have.text', 'About Page')
  })

})