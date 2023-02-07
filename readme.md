<h1 align="center">API Rest Mini Market</h1>

##  ℹ️About
API REST developed with the objective of simulating a supermarket software and practicing Node.js, TypeScript, Express, Knex, and MySQL. CRUD (Create, Read, Update and Delete) requests were built respecting the semantics and organization necessary for the elaboration of an API with RESTful principles.

## 🔗Documentation
https://documenter.getpostman.com/view/25256145/2s8ZDSc5Rq

## ☑️Requests
- Get All Clients
- Get All Products
- Get Stock
- Create Client
- Create Order

## 💻Technologies
- Node.js
- TypeScript
- Express.js
- Knex.js
- MySQL

## 🛰Running the project
<pre>
  <code>git clone https://github.com/francinehahn/mini-market-backend.git</code>
</pre>

<pre>
  <code>cd mini-market-backend</code>
</pre>

<pre>
  <code>npm install</code>
</pre>

Create a file .env and complete the following variables:
<pre>
  <code>
    DB_HOST = ""
    DB_USER = ""
    DB_PASSWORD = ""
    DB_DATABASE = ""

    PORT = 3003
  </code>
</pre>

To add the tables to your database, run the following command:
<pre>
  <code>npm run migrations</code>
</pre>

To initialize the project:
<pre>
  <code>npm run start</code>
</pre>

Finally, you can use Postman or another similar tool to test the endpoints.


