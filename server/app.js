const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const indexRouter = require('./routes/index')
const employeesRouter = require('./routes/employees')
const attendanceRouter = require('./routes/attendance')

const app = express()

mongoose
  .connect(
    'mongodb+srv://dbHarfi:admin@hacktiv-ra2tp.mongodb.net/vub_attendance?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('db connected !!')
  })
  .catch(err => {
    console.log(err)
  })

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/employees', employeesRouter)
app.use('/attendance', attendanceRouter)

module.exports = app
