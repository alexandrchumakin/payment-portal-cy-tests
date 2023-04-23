describe('Merchants Tests', () => {
    beforeEach(() => {
        // visit the merchant page before each test
        cy.visit('/#/merchants')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    })

    it('should create merchant', () => {
        let name = 'Test Org ' + Math.floor(Math.random() * 100)
        cy.fillName(name)
        cy.fillAddress('3534 May Street, Kentucky')
        cy.fillAccountNumber('453297828611599')
        cy.clickCreateButton()
        cy.checkCellAndCleanup(name)
    })

    it('total number of merchants is updated', () => {
        cy.getItemsNumber().then($initNumber => {
            let name = 'Test Org ' + Math.floor(Math.random() * 100)
            cy.fillName(name)
            cy.fillAddress('3534 May Street, Kentucky')
            cy.fillAccountNumber('453297828611599')
            cy.clickCreateButton()
            cy.getItemsNumber().should('eq', $initNumber + 1)
            cy.checkCellAndCleanup(name)
            cy.getItemsNumber().should('eq', $initNumber)
        })
    })
})
