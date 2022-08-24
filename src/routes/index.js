const authRouter = require('./auth.route');
const userRouter = require('./user.route');
const categoryRouter = require('./category.route');
const productRouter = require('./product.route');

function route(app) {
    app.use('/api/v1/', authRouter)
    app.use('/api/v1/user/', userRouter)
    app.use('/api/v1/category/', categoryRouter)
    app.use('/api/v1/product/', productRouter)
}

module.exports = route