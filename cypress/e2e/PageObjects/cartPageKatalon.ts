export class CartpageKatalonObjects{

    cartItems(){
        return  cy.get('tr[class="woocommerce-cart-form__cart-item cart_item"]')
    }

    cartItemPrice(){
        return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item'] td[class='product-price']")
    }

    cartProduct(){
        return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']")
    }
    
}