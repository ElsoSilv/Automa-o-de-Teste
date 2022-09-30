///<reference types="Cypress" />

describe('teste exploratório', function()  {
    beforeEach(function () {
       cy.visit('https://americanas.com.br/')

     })  //acessar o site e validar que acessou
       
     it('acessar o site', function() {
        cy.get('.logo__LasaLogoUI-sc-1c580kb-1 > path').should('be.visible')

    })  //cadastrar cep e validar que foi cadastrado com sucesso
    
       it('cadastrar cep', function() {
        cy.get('.cep__Text-sc-1cuzzxo-3 > strong').click()
        cy.get('.src__InputUI-sc-es0u0k-0').type('60765065')
        cy.get('.src__ButtonUI-sc-es0u0k-1 > .src__Text-sc-154pg0p-0').click()
        cy.get('.cep__Text-sc-1cuzzxo-3').should('be.be.visible')

      })
    })
