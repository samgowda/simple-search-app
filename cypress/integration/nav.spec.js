/// <reference types="Cypress" />

import { nav } from '../data-cy/nav'

describe('Main Mobile Navigation', () => {

  beforeEach(() => {
    cy.server()
    cy.route('GET', '/').as('homeCall')
    cy.visit('/')
    cy.get(nav.header).as('header')
  })

  it('contains logo, and hamburger', () => {
    cy.get('@header')
      .find(nav.hamburger)
  })
})