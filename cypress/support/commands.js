Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){
    cy.get('#firstName').type('Gabriella')
    cy.get('#lastName').type('Maas')
    cy.get('#email').type('Gabriella@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})