# User CRUD Backend - Node

This is a Node.js-based backend API for managing user CRUD (Create, Read, Update, Delete) operations. It uses MongoDB Atlas for database storage and supports a frontend built with React.

## Prerequisites
Before following the setup instructions locally, make sure you have the following:

- Node.js (v14.0.0 or higher)
- Git
- MongoDB Atlas account

## Setup Instructions

Follow these steps to set up the backend application for local testing.

### 1. Clone the Repository
```bash
git clone https://github.com/althafrm/user-crud-backend-node.git
```

### 2. Navigate into the Project Directory
```bash
cd user-crud-backend-node
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Install Nodemon
```bash
npm install -g nodemon
```

### 5. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
HOST=localhost
PORT=3001

DB_HOST=user-crud.8eugy.mongodb.net
DB_APP_NAME=user-crud
DB_USERNAME=username
DB_PASSWORD=password
```

Replace the MongoDB credentials with your actual credentials.

- **DB_HOST**: Found in your MongoDB Atlas cluster connection string (it will look like `<cluster-name>.mongodb.net`).
- **DB_APP_NAME**: The name of the database in MongoDB you want to connect to.
- **DB_USERNAME** and **DB_PASSWORD**: Credentials you created when setting up the database user in MongoDB Atlas.

### 6. Allow IP Address in MongoDB Atlas

To ensure the backend works, you must allow your local machine's current IP address in MongoDB Atlas:

1. Log in to your MongoDB Atlas account.
2. Navigate to **Network Access**.
3. Click on **Add Current IP Address**.

### 7. Start the Application
You can run the application using Nodemon:

```bash
nodemon server.js
```

### 8. Testing the API

The backend will run on [http://localhost:3001](http://localhost:3001). You can test the API endpoints using Postman.

#### Request JSON Formats for Endpoints:

1. **Fetch All Users**
   - **Endpoint:** `GET http://localhost:3001/api/users`
   - **Request Body:** None

2. **Create a New User**
   - **Endpoint:** `POST http://localhost:3001/api/createuser`
   - **Request Body:**
   ```json
   {
       "id": "unique-user-id",
       "name": "User Name"
   }
   ```

3. **Update a User**
   - **Endpoint:** `POST http://localhost:3001/api/updateuser`
   - **Request Body:**
   ```json
   {
       "id": "unique-user-id",
       "name": "Updated User Name"
   }
   ```

4. **Delete a User**
   - **Endpoint:** `POST http://localhost:3001/api/deleteuser`
   - **Request Body:**
   ```json
   {
       "id": "unique-user-id"
   }
   ```
