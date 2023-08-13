describe('Basic Login Tests on Orange HRM Application', () => {

  it('Verify Login to the HRM App is working', () => {
    cy.visit('/')

    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin123")
    cy.get('button[type="submit"]').click({force:true})

    // Use the "should" command to assert element visibility
    cy.get('.oxd-userdropdown') // Replace '.element-selector' with the actual selector of the element
      .should('be.visible')     // Use 'be.visible' to assert that the element is visible
  })

  it('Verify Login to the HRM App with invalid credentials', () => {
    cy.visit('/')

    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin1235")
    cy.get('button[type="submit"]').click({force:true})

    // Use the "should" command to assert element visibility
    cy.get('div[role="alert"]') // Replace '.element-selector' with the actual selector of the element
      .should('be.visible')     // Use 'be.visible' to assert that the element is visible
  })

  it('Login Forgot your password link navigation is working', () => {
    cy.visit('/')

    cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click({force:true})

    // Use the "should" command to assert element visibility
    cy.get('button[type="button"]') // Replace '.element-selector' with the actual selector of the element
      .should('be.visible')
  })

  it('Verify hyperlinks are not broken on Login Page', () => {
    cy.visit('/')

    // Use the custom command to fetch and log links
    cy.fetchAndLogLinks()
  })

  it('Verify Images are not broken on Login Page', () => {
    cy.visit('/')
    cy.checkImages()
  })
})