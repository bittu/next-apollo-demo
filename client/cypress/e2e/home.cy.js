/// <reference types="cypress" />

describe('next-apollo-demo home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays welcome', () => {
    cy.get('.title').invoke('text').should('match', /Welcome, (.*)/)
  })

})