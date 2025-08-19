const express = require('express')
const ContactController = require('../controllers/ContactController')
const TeacherController=require('../controllers/TeacherController')
const CourseController=require('../controllers/CourseController')
const UserController = require('../controllers/UserController')
const checkAuth = require('../middleware/auth')
const router = express.Router()


//Course
router.get('/contact',ContactController.display)
router.post('/create',ContactController.create)
router.get('/view/:id',ContactController.view)
router.put('/update/:id',ContactController.update)
router.delete('/delete/:id',ContactController.delete)

//teacher
router.get('/teacher',TeacherController.display)
router.post('/teachercreate',TeacherController.create)


//course
router.get('/course/contact',CourseController.display)
router.post('/course/create',CourseController.create)
router.get('/course/view/:id',CourseController.view)
router.put('/course/update/:id',CourseController.update)
router.delete('/course/delete/:id',CourseController.delete)


//user
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/profile',checkAuth,UserController.profile)
router.get('/logout',checkAuth,UserController.logout)


module.exports = router