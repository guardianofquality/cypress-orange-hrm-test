describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      // Load fixture data
    cy.fixture('example.json').then((testdata) => {
      const { baseUrlUsername, baseUrlPassword } = testdata;
      // Fill in the login form
      cy.loginHRM(baseUrlUsername,baseUrlPassword)
      cy.get('a[href="/web/index.php/pim/viewMyDetails"]').as('myinfo') // creating alisas
    })
      
    })

    it('Verify My Infor module is displayed in Buzz', () => {
        cy.get('@myinfo').should('be.visible').click() //using alisas
        cy.get('a[href="/web/index.php/pim/contactDetails/empNumber/7"]')
        .should('be.visible').contains('Personal Details')
    })
  })