const express = require('express')
const router = express.Router()
const AttendanceController = require('../controllers/attendance')

/* GET users listing. */
router.get('/:empId', AttendanceController.getTodayAttendance)
router.post('/', AttendanceController.recordAttendance)

module.exports = router
