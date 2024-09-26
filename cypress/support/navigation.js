

class Navigation{
    nama  = '[data-test="username"]' 
    sandi = '[data-test="password"]'
    login = '[data-test="login-button"]'
    baju = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    bike = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    cart = '[data-test="shopping-cart-link"]'
    co = '[data-test="checkout"]'
    fname = '[data-test="firstName"]'
    lname = '[data-test="lastName"]'
    code = '[data-test="postalCode"]'
    continues = '[data-test="continue"]'
    finish = '[data-test="finish"]'
    back = '[data-test="back-to-products"]'

    inputBack(back){
        cy.get(this.back).click()
    }
    inputFinish(finish) {
        cy.get(this.finish).click()
        cy.wait(3000); 
    }
    
    inputConti(continues) {
        cy.get(this.continues).click()
        cy.wait(1000); 
    }

    inputLname(lastname) {
        cy.get(this.lname).clear().type(lastname)
    }

    inputFname(firstname) {
        cy.get(this.fname).clear().type(firstname);
    }

    inputcode(code) {
        cy.get(this.code).clear().type(code)
    }

    inputNama(nama) {
        cy.get(this.nama).clear().type(nama)
    }
    inputSandi(sandi) {
        cy.get(this.sandi).clear().type(sandi)
    }

    inputButton() {
        cy.get(this.login).click()
    }
    inputbaju(){
        cy.get(this.baju).click()
    }
    inputbike(){
        cy.get(this.bike).click()
    }
    inputcart(){
        cy.get(this.cart).click()
        cy.wait(5000); 
    }
    inputco(){
        cy.get(this.co).click()
    }

}

export default Navigation;