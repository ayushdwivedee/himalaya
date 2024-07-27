
# 🌿 Himalaya Store Project

Welcome to the Himalaya Store Project! This project is a simple online store where you can buy Himalaya products, check out different categories, and learn more about the company.

## Note : Before starting to see this project, start "json-server" in your local PC by running this command -
 ```bash
  json-server --watch db.json
   ```
## 📖 Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Pages and Components](#pages-and-components)
    - [Home Page](#home-page)
    - [About Page](#about-page)
    - [Cart Page](#cart-page)
    - [Login Page](#login-page)
    - [Shop Page](#shop-page)
    - [Store Locator Page](#store-locator-page)
    - [Navbar](#navbar)
    - [Product Card Component](#product-card-component)
4. [Technologies Used](#technologies-used)

## 📜 Introduction

This project is an online store for Himalaya products. It includes a home page, about page, shop page, cart page, login page, and a store locator. The project uses React and Chakra UI to build the user interface.

## 🚀 Getting Started

Here’s how you can get started with the Himalaya Store Project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/himalaya-store.git
   cd himalaya-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

## 📄 Pages and Components

### Home Page

- **Path:** `/`
- **Description:** The home page showcases a featured product with an image, description, and a "Shop Now" button. It also displays categories and best sellers.
![Home Page](https://github.com/ayushdwivedee/himalaya/assets/140685778/b87db82b-3e7e-426b-91e8-2f92c423e26f)

### About Page

- **Path:** `/about`
- **Description:** The about page provides information about the company's story, roots, process, science, and initiatives through different tabs.
![About Page](https://github.com/ayushdwivedee/himalaya/assets/140685778/eb7a06a9-f022-45a1-82cc-d0dcce6e425a)

### Cart Page

- **Path:** `/cart`
- **Description:** The cart page displays items added to the shopping cart, allows quantity adjustments, and provides options to clear or update the cart. It shows the subtotal and grand total of the items in the cart.
![cart](https://github.com/ayushdwivedee/himalaya/assets/140685778/c97e5e83-12f9-4f89-a0ec-43efe3af269f)

### Login Page

- **Path:** `/login`
- **Description:** The login page allows users to enter their email and password to log in. Successful login redirects to the home page.
![login](https://github.com/ayushdwivedee/himalaya/assets/140685778/1b1cf931-61f6-4fec-b68d-d96c694942d5)

### Shop Page

- **Path:** `/collections`
- **Description:** The shop page displays a list of products. Users can sort products by price (low to high or high to low). Each product is displayed using the `ProductCard` component.
- ![Shop Page](https://github.com/ayushdwivedee/himalaya/assets/140685778/9dddbf9e-82e7-4e9e-b46f-bfaff8dc90f6)


### Store Locator Page

- **Path:** `/store-locator`
- **Description:** The store locator page allows users to search for nearby stores using a zip code or address. It displays search results and a map with store locations.
![store](https://github.com/ayushdwivedee/himalaya/assets/140685778/5697da0a-ff8e-45e0-882c-72cd64835674)

### Navbar

- **Description:** The navbar contains links to the home page, shop page, about page, and store locator. It also includes icons for search, account, and cart.

### Product Card Component

- **Description:** The `ProductCard` component displays a single product with its image, title, description, and price. It includes an "Add to Cart" button that allows users to add the product to their shopping cart.

## 🛠️ Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Chakra UI:** A simple, modular, and accessible component library for React.
- **Axios:** A promise-based HTTP client for the browser and Node.js.

## 🎉 Conclusion

That's it! You've got all the information you need to understand and start working with the Himalaya Store Project. If you have any questions, feel free to ask.

Happy coding! 🌟

---
