describe('Payments Tests', () => {
    beforeEach(() => {
        cy.visit('/#/payments')
    })

    it('total number of payments is updated', () => {
        let userId, userNumber, merchantId, merchantNumber;
        // copy user ID
        cy.get('.routerLink').contains('Users').click()
        cy.get('tbody > tr').eq(0).then($firstRow => {
            const idCell = $firstRow.find('td').eq(0)
            userId = idCell.text().substring(0, idCell.text().indexOf(' '))
            userNumber = $firstRow.find('td').eq(1).text()
            cy.log(`userId: ${userId}, userNumber: ${userNumber}`)
            cy.wrap(idCell).contains('Copy').click()
        })
        // copy merchant ID
        cy.get('.routerLink').contains('Merchants').click()
        cy.get('tbody > tr').eq(0).then($firstRow => {
            const idCell = $firstRow.find('td').eq(0)
            merchantId = idCell.text().substring(0, idCell.text().indexOf(' '))
            merchantNumber = $firstRow.find('td').eq(1).text()
            cy.log(`merchantId: ${merchantId}, merchantNumber: ${merchantNumber}`)
            cy.wrap(idCell).contains('Copy').click()
        })
        // make payment
        cy.get('.routerLink').contains('Payments').click()
        cy.get('tbody > tr').its('length').should('be.gt', 0)
        cy.getItemsNumber().then($initNumber => {
            const amount = '9.99'
            cy.get('#userId').should('have.value', userId)
            cy.get('#merchantId').should('have.value', merchantId)
            cy.get('#amount').type(amount)
            cy.clickPayButton()
            cy.getItemsNumber().should('eq', $initNumber + 1)
            cy.checkCellAndCleanup(amount)
            cy.getItemsNumber().should('eq', $initNumber)
        })
    })
})
