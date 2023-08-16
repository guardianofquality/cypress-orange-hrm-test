describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      // Load fixture data
    cy.fixture('example.json').then((testdata) => {
      const { baseUrlUsername, baseUrlPassword } = testdata;
      // Fill in the login form
      cy.loginHRM(baseUrlUsername,baseUrlPassword)
    })
      
    })

    it('Verify user able to post in newsfeed of Buzz Module', () => {
        
        cy.get('a[href="/web/index.php/claim/viewClaimModule"]').as('ClaimModule') // creating alisas

        cy.get('@ClaimModule').should('be.visible').click() //using alisas
        cy.get('button[type="submit"]').click
    })
  })