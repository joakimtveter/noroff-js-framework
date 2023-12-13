# Noroff JavaScript Framework Course Assignment

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2ec6104-e2ca-46e4-9bbf-e5224345a465/deploy-status)](https://app.netlify.com/sites/snazzy-quokka-4cc59f/deploys)

![image](https://jsf.tveter.dev/screenshot.png)

This is my submission for the JavaScript Frameworks Course Assingment for the [Noroff Frontend Development course](https://www.noroff.no/en/studies/vocational-school/front-end-development).

## Description

### Project Brief

You are tasked with build out the following pages for an eCom store. The Homepage should have a list of all the products. 

You pages should use a `<Layout>` component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

### Technology stack

- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [Vite](https://vitejs.dev/) as the build tool
- [React](https://reactjs.org/) as the UI library
- [React Router DOM](https://reactrouter.com/) for client-side routing
- [React Hook Form](https://react-hook-form.com/) for form state and handling
- [Yup](https://github.com/jquense/yup) for form validation
- [Redux Toolkit](https://redux-toolkit.js.org/) for cart state
- [React Helmet](https://github.com/nfl/react-helmet#readme) for meta tag updates
- CSS modules for styling

## Development

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) installed on your computer.

Only tested with Node.js v18, but should work with any version of Node.js v14.18 or newer.
Uses a `.nvmrc` file to specify the version of Node.js to use, you can change your node version with `nvm use`.

### Getting Started

1. Clone the repository: `git clone https://github.com/joakimtveter/noroff-js-framework.git`
2. Run `npm install` from inside the project folder to install dependencies.
3. Run `npm run dev` to start the development server.

## Deployment

The site is hosted on [Netlify](https://netlify.com/). Any commit to the `main` branch will trigger a deployment.
The site can be found at [https://jsf.tveter.dev](https://jsf.tveter.dev).

## Contributing

This is a school project, so I will not be accepting any contributions.

## Contact

Connect with me on [LinkedIn](https://www.linkedin.com/in/joakim-tveter), or check out [my website](https://joakimtveter.no).
