# Authentication and Authorization System

This project is a highly secured Authentication and Authorization system.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/auth_tutorial.git
2. npm install
3. npm start

Usage

Routes


Register

    Endpoint: /register
    Method: POST
    Description: Register a new user securely with JWT authentication.

Login

    Endpoint: /login
    Method: POST
    Description: Log in with existing credentials and receive JWT tokens.

Refresh Token

    Endpoint: /refresh-token
    Method: POST
    Description: Obtain new access and refresh tokens using a valid refresh token.

Logout

    Endpoint: /logout
    Method: DELETE
    Description: Log out from the application.

Dependencies

    @hapi/joi: ^17.1.1
    bcrypt: ^5.1.1
    dotenv: ^16.3.1
    express: ^4.18.2
    http-errors: ^2.0.0
    jsonwebtoken: ^9.0.2
    mongoose: ^8.0.0
    morgan: ^1.10.0
    nodemon: ^3.0.1

License

This project is licensed under the ISC License.

Author

    Emaye Andrew
