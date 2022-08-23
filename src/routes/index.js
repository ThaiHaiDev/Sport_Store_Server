const authRouter = require('./auth.route');
const userRouter = require('./user.route');

function route(app) {
    app.use('/api/v1/', authRouter)
    app.use('/api/v1/user/', userRouter)
}

module.exports = route