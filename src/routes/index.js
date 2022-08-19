const authRouter = require('./auth.route')

function route(app) {
    app.use('/api/', authRouter)
}

module.exports = route