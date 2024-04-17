# TWC Contacts Portal API

Welcome to the TWC Contacts Portal API documentation. This API serves as the backend for the TWC Contacts Portal application, providing endpoints to manage contacts and users.

Table of Contents
1. Installation
2. API Endpoints
3. Technologies Used

### Installation
`git clone https://github.com/DulanjanChanaka/twc-test-api.git` 

`npm install`

`npx nodemon server.js`

### API Endpoints
* GET /api/contact: Get all contacts
* POST /api/contact: Create a new contact
* PUT /api/contact/:id: Update a contact by ID
* DELETE /api/contact/:id: Delete a contact by ID
* POST /api/user/register: Register a new user
* POST /api/user/login: Log in as an existing user

### Technologies Used
* Express.js
* MongoDB
* Mongoose
* Axios
* Cors
* crypto-js
