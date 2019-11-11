import { searchBar } from '../data-cy/searchBar'

const search = {
  validQuery: "cash",
  unsanitized: "ca($k9k4*U2$",
  blank: "///"
}

describe('The Search', () => {

  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/').as('searchCall')
    cy.visit('/')
    cy.get(searchBar.container).should('have.descendants', searchBar.input)
    cy.get(searchBar.input).as('search')
  })

  // it('allows a user to submit a query', () => {
  //   cy.get('@search')
  //     .type(`${search.validQuery}`)
  //     .find(searchBar.submit).click()

  //   cy.wait('@searchCall').then((xhr) => {
  //     let gifs = xhr.response.body.gifs

  //     cy.get(grid.container).as('searchResults')

  //     cy.get('@searchResults')
  //       .should('have.length', gifs.length)

  //     cy.get('@searchResults')
  //       .each((gif, index) => {

  //         cy.wrap(gif)
  //           .should('have.descendants', gif.image)
  //           .and('have.descendants', gif.icon)
  //       })
  //   })
  // })
})