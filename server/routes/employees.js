const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee')

/* GET users listing. */
router.get('/', employeeController.getEmployees)
router.post('/', employeeController.addEmployee)

module.exports = router
