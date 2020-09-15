const path = require('path');
const express = require('express');
const morgan = require('morgan');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// Require all routes
const indexRouter = require('./routes');

const app = express();


// Middleware registered
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// registering a middleware for server static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Global Middleware registered
// Using morgan only in development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};


app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// ************ REGISTER ROUTES HERE ********** //

app.use(indexRouter);

// ************ END ROUTE REGISTRATION ********** //




module.exports = app;