const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  nip: {
    type: String,
    required: [true, 'NIP is required'],
    validate: {
      validator: async function(nip) {
        try {
          const emp = await mongoose.models.Employee.findOne({ nip })
          if (emp) return false
          return true
        } catch (error) {
          return false
        }
      },
      msg: 'NIP already exist'
    }
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  division: {
    type: String,
    required: [true, 'Division is required']
  }
})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
