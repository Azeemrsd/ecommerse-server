const express = require('express')
const app = express();
const morgan = require('morgan')


const productRouter = require('./api/routes/product');
const ordersRouter = require('./api/routes/orders')

app.use(morgan('dev'));

//Routes which should handle requests
app.use('/products',productRouter);
app.use('/orders',ordersRouter)
module.exports = app;