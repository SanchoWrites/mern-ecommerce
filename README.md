# MERN Ecommerce

## Description

An e-commerce website built with MERN stack centered around selling desktops and laptops. The main implementations are the following:

1. Users can view all products and filter by categories
2. Users can view single product details
3. Users can configure a custom PC step-by-step and add the complete build to the cart
4. Users can add products to cart and manage quantities
5. Users can register & sign in (JWT-authenticated)
6. Admin can create & delete products

![Project screenshot](Frontend/src/Components/Assets/image_for_readme.png)

### Features:

  * React powers the interactive user interface for both the customer storefront and the admin panel
  * Node runtime environment hosts the server and processes API requests
  * Express manages HTTP requests, defines API endpoints, and connects the frontend to the database
  * Multer intercepts image uploads from the frontend and saves them safely to the server
  * Mongoose creates data schemas and translates the server code into database commands

## Install

1. #### Clone the repo using this command
   ```bash
   git clone https://github.com/SanchoWrites/mern-ecommerce.git
   ```
2. Install backend packages
   ```bash
   cd Backend
   npm install
   ```
3. Install frontend packages
   ```bash
   cd Frontend
   npm install
   ```
4. Install admin packages
   ```bash
   cd Admin
   npm install
   ```
5. Set up mongodb atlas database
   1. Create an atlas account
   2. Deploy a cluster
   3. In your cluster, click on Connect, choose the Drivers and Client Libraries option, select language JavaScript and client library Node.js Driver, turn on legacy URL string and copy the connection string
   4. In the Backend folder, open index.js (and seed.js) and paste your connection string inside mongoose.connect(). Make sure to include your password inside the connection string
6. Seed the database
   ```bash
   cd Backend
   npm run seed
   ```
7. Run the backend
   ```bash
   cd Backend
   node index.js
   ```
8. Run the frontend
   ```bash
   cd Frontend
   npm start
   ```
9. Open the admin panel
   ```bash
   cd Admin
   npm start
   ```
