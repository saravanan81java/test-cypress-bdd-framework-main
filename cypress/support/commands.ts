// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
      * Launch the Katalon Website
      * @example
      *    cy.openKatalonWebsite()
      */
      openKatalonWebsite()

    }
  }
}

Cypress.Commands.add('openKatalonWebsite', () => {
  cy.visit('https://cms.demo.katalon.com/');
  cy.title().should('eq', 'Katalon Shop – Katalon Ecommerce');
})

