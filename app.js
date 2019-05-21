const path = require('path');

const express = require('express');

const indexRouter = require('./routes/indexRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(300);