class ErrorHandler {
    static handle(err, req, res, next) {
        let status = 500
        let msg = 'Internal Server Error'
        if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError" ) {
            msg = err.errors.map(element => {
                return element.message
            })
            msg = msg.join(', ')
            status = 401
        }
        res.status(status).json({ message: msg })
    }
}

module.exports = ErrorHandler