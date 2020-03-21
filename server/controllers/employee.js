const empModel = require('../models/employees')

class Employee {
  static async getEmployees(req, res, next) {
    try {
      const { keyword } = req.query
      const employees = await empModel.find({ name: { $regex: keyword } })
      res.status(200).json(employees)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async addEmployee(req, res, next) {
    try {
      const newEmp = await empModel.create(req.body)
      res.status(201).json(newEmp)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = Employee
