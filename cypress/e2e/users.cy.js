describe('Users Tests', () => {

    beforeEach(() => {
        // visit the payment portal before each test
        cy.visit('/#/')
    })

    it('should display the correct title', () => {
        cy.title().should('eq', 'payment-portal')
    })

    it('should create user', () => {
        let phone = '112-303-1919'
        cy.get('#name').type('John Doe')
        cy.get('#phone').type(phone)
        cy.get('#accountNumber').type('4532978286115123')
        cy.contains('button', 'Create').click()

        // verify that the user has been created and clean it up
        cy.get('td').contains(phone).should('be.visible')
            .then($td => cy.wrap($td).parent().contains('button', 'Delete').click())
    })

})
