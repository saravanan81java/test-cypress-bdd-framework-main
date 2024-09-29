export class HomepageKatalonObjects{

    product(){
        return cy.get('li[class*="product-type-simple"] a[class*="ajax_add_to_cart"]')
    }

    cart(){
        return cy.contains('Cart')
    }
}