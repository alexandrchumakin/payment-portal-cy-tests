describe('Merchant Tests', () => {

    beforeEach(() => {
        // visit the merchant page before each test
        cy.visit('/#/merchants')
    })

    it('should create merchant', () => {
        let name = 'Test Org ' + Math.floor(Math.random() * 100)
        cy.get('#name').type(name)
        cy.get('#address').type('3534 May Street, Kentucky')
        cy.get('#accountNumber').type('453297828611599')
        cy.contains('button', 'Create').click()

        // verify that the merchant has been created and clean it up
        cy.get('td').contains(name).should('be.visible')
            .then($td => cy.wrap($td).parent().contains('button', 'Delete').click())
    })

})
