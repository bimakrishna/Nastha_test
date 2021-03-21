const { Event } = require('../models/index')

class Controller {
    static async showEvent (req, res, next)  {
        try {
            const events = await Event.findAll()
            res.status(200).json(events)
        }
        catch(err) {
            next(err)
        }
    }

    static async addEvent (req, res, next) {
        try {
            const { title, lokasi, participant, now_date, notes, image_url } =  req.body
            const newEvent = await Event.create({
                title,lokasi, participant, now_date, notes, image_url 
            })
            res.status(201).json(newEvent)
        }
        catch(err) {
            next(err)
        }
    }

    static async eventById (req, res, next) {
        try {
            const id = req.params.id
            const event = await Event.findOne({
                where: {
                    id: id
                }
            })
            if(!event) {
                res.status(404).json({ message: 'Event not found'})
            }
            else {
                res.status(200).json(event)
            }
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = Controller