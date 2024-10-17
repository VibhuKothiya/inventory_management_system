
## Objective
Develop a secure and efficient backend to manage user authentication, inventory management, and order processing.

## Features
1. **User Authentication**: 
    - Implement JWT-based authentication for both customers and admins.
    - Role-based access control: 
        - **Admin**: Can manage inventory and view all orders.
        - **Customer**: Can browse products, place orders, and view their order history.
2. **Inventory Management**: 
    - Create CRUD API endpoints for:
        - **Products**: CRUD operations for creating, viewing, updating, and deleting products.
        - **Inventory**: Admins can manage stock levels, with alerts for low-stock products.
3. **Order Management**: 
    - Customers should be able to:
        - Place an order with multiple products.
        - View order status (Pending, Shipped, Delivered).
    - Admins should be able to:
        - Update order status and view all customer orders.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (Json Web Token)**
- **bcryptjs**
- **Helmet**
- **CORS**

## Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
- Node.js
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/e-commerce-backend.git
    cd e-commerce-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT = 4050
    MONGO_URI = mongodb://localhost:27017/inventory
    JWT_SECRET = Vibhuti123
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```

2. The server should be running on `http://localhost:4050`

### Deployment on render
1. Create a render app:
    ```bash
    render create inventory_management
    ```

2. Add environment variables:
    ```bash
    render config:set JWT_SECRET=Vibhuti123
    render config:set MONGO_URI=mongodb://localhost:27017/inventory
    ```

3. Deploy:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push heroku master
    ```

### API Endpoints

#### User Endpoints
- **Register User**: `POST /api/users`
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "yourPasswordHere"
    }
    ```
- **Login User**: `POST /api/users/login`
    ```json
    {
      "email": "john.doe@example.com",
      "password": "yourPasswordHere"
    }
    ```
- **Get User Profile**: `GET /api/users/profile` (Protected)
    ```http
    Authorization: Bearer <JWT_TOKEN>
    ```

#### Product Endpoints
- **Create Product**: `POST /api/products` (Admin Only)
    ```json
    {
      "name": "Product Name",
      "price": 100,
      "stock": 50
    }
    ```
- **Get All Products**: `GET /api/products`

#### Order Endpoints
- **Create Order**: `POST /api/orders` (Protected)
    ```json
    {
      "products": ["ProductID1", "ProductID2"]
    }
    ```
- **Get User Orders**: `GET /api/orders/myorders` (Protected)
- **Update Order Status**: `PUT /api/orders/:id` (Admin Only)
    ```json
    {
      "status": "Shipped" // or "Delivered"
    }
    ```

### Live Deployment
Check out the live app [here](https://your-app-name.herokuapp.com).


