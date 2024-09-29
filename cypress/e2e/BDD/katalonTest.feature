Feature: Katalon Test

    @smoke
    Scenario: Verify the user add the products to the cart and remove the lowest price item
        
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I Search for lowest price item
        When Iam able to remove the lowest price item from my cart
        Then Iam able to verify three items in my cart
