const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const corsOptions = require('./configs/corsOptions');
const cardsRouter = require('./routes/cards');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const logStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'req.log'),
  { flags: 'a' }
);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev', { stream: logStream }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/cards', cardsRouter);
app.use('/api/users', usersRouter);
app.use('/api', authRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
