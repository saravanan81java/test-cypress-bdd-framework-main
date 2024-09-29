import { CartpageKatalonObjects } from "cypress/e2e/PageObjects/cartPageKatalon";
import { HomepageKatalonObjects } from "cypress/e2e/PageObjects/homePageKatalon";
import { Given, Then, When } from "node_modules/@badeball/cypress-cucumber-preprocessor/lib/methods";

let LowestPricevalue: string

let hp = new HomepageKatalonObjects()
let cp= new CartpageKatalonObjects()

Given("I add four random items to my cart", () => {

    cy.openKatalonWebsite()

    for (let i = 0; i < 4; i++) {
        hp.product().eq(i).scrollIntoView()
        hp.product().eq(i).click()
        cy.wait(500)
    }
});

When("I view my cart",()=>{
    hp.cart().scrollIntoView().click();
    cy.title().should('eq', 'Cart – Katalon Shop');
})

Then("I find total four items listed in my cart",()=>{
    cp.cartItems().should('have.length', 4);
})

When("I Search for lowest price item",()=>{
    cp.cartItemPrice().then(el => {
        let innerText = el.text().split('$').sort()
        LowestPricevalue = innerText[1]
        cy.log('First Element is ' + LowestPricevalue)
    })
})

When("Iam able to remove the lowest price item from my cart",()=>{
   cp.cartProduct().each(($el, index, $list) => { 
        const productPrice = $el.find('td.product-price').text()
        let LowestPriceWithDollor = '$' + LowestPricevalue

        if (productPrice.trim() == LowestPriceWithDollor.trim()) {
            cy.wrap($el.find('td.product-remove a')).click({ force: true })
        }
    })
})

Then("Iam able to verify three items in my cart",()=>{
    cp.cartItems().should('have.length', 3);
})
