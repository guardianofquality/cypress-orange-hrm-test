describe('Dasboard Tests on Orange HRM Application', () => {

  beforeEach('Before Tests', () => {
    cy.loginHRM('Admin','admin123')
  })

  it('Verify hyperlinks are not broken on Dashboard Page', () => {
    cy.fetchAndLogLinks()
    cy.screenshot() //taking a screenshot with command
  })

  it('Verify Images are not broken on Dashboard Page', () => {
    cy.checkImages()
    cy.screenshot('dashboard/imageNotBroken/') // taking the screenshot and saving it to a particular location.
  })

  it('Verify Screenshot taken by failed case at assertion on dashboard page', () => {
    // purposefully failing the test, so that cypress can take screenshot from config attribute.
    cy.get('.oxd-userdropdown')
    .should('contain', 'Sobhit Sharma')
  })
})