describe('Brand page', () => {
    beforeEach(() => {
        cy.visit('https://www.bbc.co.uk/programmes/b014r87y')
    });

    it('Page title is set in the html header', () => {
        cy.title().should('eq', 'BBC Radio 3 - Essential Classics')
    });

    it('masthead is displayed', () => { 
        cy.get('#br-masthead').should('be.visible')
    });
});
