const attModel = require('../models/attendance')
const { ObjectId } = require('mongoose').Types

class Attendance {
  static async getTodayAttendance(req, res, next) {
    try {
      const { empId } = req.params
      const todayAttendance = await attModel
        .find({
          empId,
          startDate: { $lte: new Date() }
        })
        .populate('empId')
      res.status(200).json(todayAttendance[0])
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async recordAttendance(req, res, next) {
    try {
      const { empId, attendStatus } = req.body
      let recorded
      if (attendStatus === 'start') {
        recorded = await attModel.create({
          empId: ObjectId(empId),
          startDate: new Date()
        })
      } else {
        recorded = await attModel.updateOne(
          {
            empId: ObjectId(empId),
            startDate: { $lte: new Date() }
          },
          {
            endDate: new Date()
          }
        )
      }
      res.status(200).json(recorded)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = Attendance
