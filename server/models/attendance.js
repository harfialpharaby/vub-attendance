const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attendanceSchema = new Schema({
  empId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: null }
})

const Attendance = mongoose.model('Attendance', attendanceSchema)
module.exports = Attendance
