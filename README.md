# React Router Exercise

In this exercise, you'll create a multi-page web application using React Router v6. The application will have three pages: Home, About, and Contact.

## Instructions

1. Set up a new React project using Vite.
2. Install the `react-router-dom` package by running `npm install react-router-dom` or `yarn add react-router-dom` in your project directory.
3. In your `src` directory, create the following components:
   - `Home.jsx`
   - `About.jsx`
   - `Contact.jsx`
   - `Navigation.jsx`
4. In the `Home.jsx` component, create a simple home page to include a h1 inside a `header` element and a paragraph inside a `main` element with the name of the component.
5. In the `About.jsx` component, create a simple about page to include a h1 inside a `header` element and a paragraph inside a `main` element with the name of the component.
6. In the `Contact.jsx` component, create a simple contact page to include a h1 inside a `header` element and a paragrapinside a `main` element h with the name of the component.
7. In the `Navigation.jsx` component, create a navigation menu with links to the Home, About, and Contact pages.
8. In your `App.jsx` file, import the necessary components from `react-router-dom` and set up the router:
   - Import `BrowserRouter`, `Routes`, `Route`, and `Link` from `react-router-dom`.
   - Wrap your entire application with the `BrowserRouter` component.
   - Inside the `BrowserRouter`, create `Routes` and define the different `Route` components for each page.
   - Use the `Link` component in your `Navigation.jsx` component to create links to the different pages.
9. Render the `Navigation.jsx` component in your `App.jsx` file.

## Bonus Tasks

1. Add a 404 page (NotFound component) that displays when the user navigates to a non-existent route.
2. Implement product listing and details pages by creating the following components:

- `ProductsList.jsx`: This component should render a list of products. Each product item should be a clickable link that navigates to the product details page.
- `ProductDetails.jsx`: This component should display the details of a specific product. The product ID should be retrieved from the URL parameter.

In your `App.jsx` file, define the following routes:

- `/products` route that renders the `ProductsList` component
- `/products/:id` route that renders the `ProductDetails` component

When a user navigates to `/products`, they should see the list of products. When they click on a product item, they should be navigated to the `/products/:id` route (replacing `:id` with the actual product ID), where the `ProductDetails` component will display the details of the selected product.

You can use the `Link` component from `react-router-dom` to create clickable links for the product items in the `ProductsList` component. In the `ProductDetails` component, you can use the `useParams` hook from `react-router-dom` to retrieve the product ID from the URL parameter.
Update `Ǹavigation`accordingly.
3. Add some basic styling to your application using CSS or a UI library like Material-UI or Bootstrap.

## Testing

To test your solution, follow these steps:

1. Run your React application and open it in your web browser.
2. Click on the links in the navigation menu to ensure that the correct page is rendered.
3. Try navigating to a non-existent route (e.g., `/unknown`) and ensure that the 404 page is displayed (if you implemented the bonus task).
4. If you implemented routing por `products`, test the "Products" page and ensure that clicking on a product navigates to the "Product Details" page correctly.

Good luck!