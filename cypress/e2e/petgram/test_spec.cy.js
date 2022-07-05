describe('mi primer test', function() {

    it('para ver que show', function() {
        cy.visit('/')
    })

    it('navegamos a una categoria y vemos fotos', () => {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('si podemos navegar con la navbar a la home', () => {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })

    it('los usuarios no registrados ven el login al visitar la página de favs', () => {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})