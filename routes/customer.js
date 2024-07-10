const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const connection = new Pool({
  user: 'user',
  password: 'password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'db'
});

const getUsers = (request, response) => {
    connection.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    connection.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])
    })
  }
  
  const createUser = (request, response) => {
    const { email, fname, lname } = request.body
  
    connection.query('INSERT INTO customer (email, fname, lname) VALUES ($1, $2, $3)', [email, fname, lname], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(request.body)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { email, fname, lname } = request.body
  
    connection.query(
      'UPDATE customer SET email = $1, fname = $2, lname = $3 WHERE id = $4', //email, fname, lname
      [email, fname, lname, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    connection.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

router.get('/customers', getUsers)
router.get('/customer/:id', getUserById)
router.post('/customer', createUser)
router.put('/customers/:id', updateUser)
router.delete('/customer/:id', deleteUser)
  
module.exports = router;