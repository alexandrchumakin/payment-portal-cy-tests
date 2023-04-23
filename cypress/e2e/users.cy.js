describe('Users Tests', () => {
    beforeEach(() => {
        // visit the users page before each test
        cy.visit('/#/')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    })

    it('should create user', () => {
        let phone = '112-303-1919'
        cy.fillName('John Doe')
        cy.fillPhone(phone)
        cy.fillAccountNumber('4532978286115123')
        cy.clickCreateButton()
        cy.checkCellAndCleanup(phone)
    })

    it('total number of users is updated', () => {
        cy.getItemsNumber().then($initNumber => {
            let phone = '112-303-1919'
            cy.fillName('John Doe')
            cy.fillPhone(phone)
            cy.fillAccountNumber('4532978286115123')
            cy.clickCreateButton()
            cy.getItemsNumber().should('eq', $initNumber + 1)
            cy.checkCellAndCleanup(phone)
            cy.getItemsNumber().should('eq', $initNumber)
        })
    })
})
