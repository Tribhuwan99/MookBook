const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const indexRouter = require("./routes/index");
const userRouter = require('./routes/usersRouter');
const db = require('./config/mongoose_connection');
const blogRouter = require('./routes/blogRouter');
const quizRouter = require('./routes/quizRouter');
const profileRouter = require('./routes/profileRouter');
const testRouter = require('./routes/testRouter');

const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/quiz', quizRouter);
app.use('/profile', profileRouter);
app.use('/test', testRouter);



app.listen(4000);
