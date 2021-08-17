describe('All episodes guide page', () => {
    beforeEach(() => {
        cy.visit('https://www.bbc.co.uk/programmes/m000sd78/episodes/guide')
    });

    it('Page title is set in the html header', () => {
        cy.title().should('eq', 'BBC One - Doctors, Series 22 - Episode guide')
    });

    it("masthead is displayed", ()=> {
        cy.get("#br-masthead").should('be.visible')
    });

    it('top-level heading "Episodes" is displayed', () => {
        cy.get('h1').contains('Episodes')
        // And the hidden element in the heading says Episode guide
        cy.get('h1 .visually-hidden').should(($el) => {
            expect($el.text().trim()).equal('Episode guide')
        })
    });

    it('Sub-navigation is displayed', () => {
        cy.get('.br-box-secondary .pull--left').should('be.visible')
        // And the 'All' item is highlighted on the page
        cy.get('.br-page-linkhover-ontext--hover').contains('All')
        cy.get('.br-page-linkhover-ontext--hover').should(($el) => {
            expect($el.text().trim()).equal('All')
        })
        cy.get('.br-page-linkhover-ontext--hover').contains('All').should(($el) => {
            expect($el.text()).equal('All')
        })
        cy.get('.br-page-linkhover-ontext--hover').should(($el) => {
            expect($el.get(0).innerText).equal('All')
        })
    });

    it('Episode elements displayed on screen width from 600px', () => {
        cy.viewport(660, 1024)
        // Then the following details are displayed on the all guide page
        cy.get('.programme--episode .programme__img').should('have.length', 30)
        cy.get('.programme--episode .iplayer-icon').should('have.length', 30)
        cy.get('.programme--episode .programme__title').should('have.length', 30)
        cy.get('.programme--episode .programme__synopsis').should('have.length', 30)
    })

    it('Pagination bar is displayed after list exceeds 30 episodes', () => {
        cy.get('.programme--episode').should('have.length', 30)
        cy.get('.pagination').should('be.visible')
    })
});
