describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      // Load fixture data
    cy.fixture('example.json').then((testdata) => {
      const { baseUrlUsername, baseUrlPassword } = testdata;
      // Fill in the login form
      cy.loginHRM(baseUrlUsername,baseUrlPassword)
      cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').as('leave') // creating alisas
    })
      
    })

    it('Verify Leave module is displayed in Buzz', () => {
        cy.get('@leave').should('be.visible').click() //using alisas

        cy.get('button[type="submit"]')
        .should('be.visible').contains('Personal Details')
    })
  })