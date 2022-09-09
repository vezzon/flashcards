const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cardsRouter = require('./routes/cards');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use(authRouter);

app.listen(4000);
