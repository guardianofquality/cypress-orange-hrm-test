describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      cy.loginHRM('Admin','admin123')
      cy.get('a[href="/web/index.php/buzz/viewBuzz"]')
      .should('be.visible')
      .click()
    })

    it('Verify user able to post in newsfeed of Buzz Module', () => {
        cy.get('textarea')
        .should('be.visible')
        .type('"Hey My first post, Whats on your mind"');

        cy.get('button[type="submit"]').click({force:true})

        cy.get('.oxd-toast-content.oxd-toast-content--success')
        .should('be.visible').contains('Successfully Saved');
    })
  })