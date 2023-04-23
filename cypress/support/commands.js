/**
 * @memberof cy
 * @method fillName
 * @param {string} value
 */
Cypress.Commands.add('fillName', (value) => {
    cy.get('#name').type(value)
})

/**
 * @memberof cy
 * @method fillAddress
 * @param {string} value
 */
Cypress.Commands.add('fillAddress', (value) => {
    cy.get('#address').type(value)
})

/**
 * @memberof cy
 * @method fillPhone
 * @param {string} value
 */
Cypress.Commands.add('fillPhone', (value) => {
    cy.get('#phone').type(value)
})

/**
 * @memberof cy
 * @method fillAccountNumber
 * @param {string} value
 */
Cypress.Commands.add('fillAccountNumber', (value) => {
    cy.get('#accountNumber').type(value)
})

/**
 * @memberof cy
 * @method clickCreateButton
 */
Cypress.Commands.add('clickCreateButton', () => {
    clickButton('Create')
})

/**
 * @memberof cy
 * @method clickPayButton
 */
Cypress.Commands.add('clickPayButton', () => {
    clickButton('Pay')
})

/**
 * @memberof cy
 * @method checkCellAndCleanup
 * @param {string} value
 */
Cypress.Commands.add('checkCellAndCleanup', (value) => {
    cy.get('tbody > tr').its('length').then($numberOfRows => {
        cy.get('td').contains(value).scrollIntoView().should('be.visible')
            .then($td => cy.wrap($td).parent().contains('button', 'Delete').click().then(() => {
                cy.get('tbody > tr').should('have.length', $numberOfRows - 1)
            }))
    })
})

/**
 * @memberof cy
 * @method getItemsNumber
 * @return Cypress.Chainable
 */
Cypress.Commands.add('getItemsNumber', () => {
    let result;
    cy.get('.header-number').then($value => {
        const textValue = $value.text()
        const number = textValue.substring(0, textValue.indexOf(' '))
        result = cy.wrap(parseInt(number))
    })
    return result;
})

function clickButton(label) {
    cy.get('tbody > tr').its('length').then($numberOfRows => {
        cy.contains('button', label).click()
        cy.get('tbody > tr').should('have.length', $numberOfRows + 1)
    })
}
