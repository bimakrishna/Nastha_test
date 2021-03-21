const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/event', Controller.showEvent)
router.post('/event', Controller.addEvent)
router.get('/event/:id', Controller.eventById)

module.exports = router