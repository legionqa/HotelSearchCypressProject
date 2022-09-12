///<reference types = "Cypress"/>
describe('Job Cafe sanity spec', {defaultCommandTimeout: 10000}, () => {
    it('test jobs page with 10 sec', {defaultCommandTimeout: 10000}, () => {
     
        cy.visit('job-page')
       // cy.wait(5000)
        cy.get('[class="post-item clearfix"]').should('be.visible')

    })

    it('test jobs page search for QA position', {defaultCommandTimeout: 20000}, () => {
     
        cy.visit('job-page')
        // cy.get('[placeholder="position"]').type('QA', {force: true})
        // cy.get('button').contains('search').click({force: true})
        cy.searchForPosition('QA')
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')


    })

    it('test jobs page search for developer position', {defaultCommandTimeout: 20000}, () => {
     
        cy.visit('job-page')
        // cy.get('[placeholder="position"]').type('Developer', {force: true})
        // cy.get('button').contains('search').click({force: true})
        cy.searchForPosition('Developer')

        cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')


    })

    it('test jobs page search for QA positions in USA By company name', {defaultCommandTimeout: 20000}, () => {
     
        cy.visit('job-page')
        cy.completeSearch('QA', 'USA', 'Apple')
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        cy.get('p').contains('Apple').should('be.visible')
        cy.get('span').contains('USA').should('be.visible')



    })

    

    // it('test jobs page with 1 sec', {defaultCommandTimeout: 1000}, () => {
     
    //     cy.visit('http://167.99.178.249:3000/job-page', {timeout:10000})
    //    // cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]', {timeout:1000000000}).should('be.visible')

    // })


  })