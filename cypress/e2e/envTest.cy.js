/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require('../support/pages/profile.page')
const { homePage } = require('../support/pages/home.page')

describe('Environment Variable Test', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion'	, Cypress.env("ebacStoreVersion"), { domain: 'lojaebac.ebaconline.art.br' })

        cy.fixture(`${Cypress.env("MY_ENV")}/data.json`).then(data => {
           cy.log(data.email)
        })
    })

    it('Default Env', () => {
        cy.log(Cypress.env('MY_ENV'))
        cy.log(Cypress.env('ebacStoreVersion'))


        cy.visit('/')
    })
    
    it('Config test Env', {
        env: {
            MY_ENV: "local"
        }
    }, () => {
        cy.log(Cypress.env('MY_ENV'))
    })
})