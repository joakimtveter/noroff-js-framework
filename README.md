# Noroff Javascript Framework Course Assignment

## Local Development Setup

This project is using Vite.js as a bundler. To run the project locally, you will need to install the dependencies and run the dev server.

```bash
npm install
npm run dev
```

## Deployment

This project is deployed to [Netlify](httos://netlify.com). The deployment is triggered automatically when a commit is pushed to the `main` branch.

## Assignment

### General

[x] You will be using React Router to switch between pages.
[ ] Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.
[x] You are not required to use TypeScript.
[x] Your code is expected to be clean and well-formatted.

### Home Page

[x] The Homepage should have a list of all the products.
[x] There should be a look-ahead search bar that filters products when typing in a product name.
[x] Clicking on a product should take a user to an individual product page.
[ ] Each Product component will have a View product button which will link to the ProductPage page.
[x] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input.
[x] Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.

### Layout

[x] You pages should use a `<Layout>` component that contains a header and footer.
[x] The header should contain a nav bar
[ ] The header should contain a Cart icon component that acts as a button as well as displays the current number of items in the cart.

### Product Page

[x] The individual product page should display data for a single product.
[ ] There should be an Add to cart button which, upon clicking, adds the product to the cart.
[x] The product page should display the title of the product, the description and the image.
[x] There should also be reviews listed for the product, if there are any.
[ ] You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

### Cart Page

[ ] Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total.
[ ] The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

### Checkout Success Page

[ ] The Checkout success page will display a message to the user notifying them that their order was successful.
[ ] There should also be a link that lets a user go back to the store.
[ ] The cart must be cleared if the user gets to the Checkout success page.

### Contact Page

[ ] There will be a contact page which will contain a contact form with the following fields. There must be form validation:
[ ] Full name (Minimum number of characters is 3, required)
[ ] Subject (Minimum number of characters is 3, required)
[ ] Email (Must be a valid email address, required)
[ ] Body (Minimum number of characters is 3, required)