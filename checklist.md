# Checklist

API All products: https://api.noroff.dev/api/v1/online-shop

∏API single product https://api.noroff.dev/api/v1/online-shop/:id

## Task

[x] Create a app.
[x] Create a Header that has a Nav.
[x] Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.
[ ] Create a Footer component.
[x] Create a Layout component that has your Header and Footer.
[x] Create a Homepage

[x] Create a Product card

[ ] Create the ContactPage
[x] Create the Product Page
[ ] Create the Checkout Page
[ ] Create the Checkout Success Page
[x] Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.
[x] Fetch the list of products on the Homepage and store this as a state.
[x] On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.
[x] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input.Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.
[x] On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.
[x] Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.
[x] Clicking on the Cart Icon component will take the user to the CheckoutPage page.
[x] The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.
[x] Clicking the Checkout button will take the user to the CheckoutSuccessPage.
[x] The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.

[x] On the ContactPage, create the following inputs with the following requirements:

1. [x] Full name (Minimum number of characters is 3, required)
1. [x] Subject (Minimum number of characters is 3, required)
1. [x] Email (Must be a valid email address, required)
1. [x] Body (Minimum number of characters is 3, required)
1. [x] Submit button

[x] `console.log()` the data from the form once validation requirements are met.

[x] Deploy it to Netlify.
[ ] Your design should be responsive.
[x] There should also be a link that lets a user go back to the store on checkout success page.

## Submission

[ ] Github repo link
[ ] Netlify link
