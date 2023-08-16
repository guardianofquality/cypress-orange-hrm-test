describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      cy.loginHRM('Admin','admin123')
      cy.get('a[href="/web/index.php/claim/viewClaimModule"]').as('ClaimModule') // creating alisas
    })

    it('Verify user able to post in newsfeed of Buzz Module', () => {
        cy.get('@ClaimModule').should('be.visible').click() //using alisas
        cy.get('button[type="submit"]').click
    })
  })