const express = require('express')
const app = express();

const hbs = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3000;
app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// connect mongodb database
require('./server/database/database')();

// setup view engine
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView : 'default',
    layoutsDir : path.join(__dirname , 'views'),
    partialsDir : path.join(__dirname, 'views/partials')
}))

// calling routes
app.use('/', require('./server/router/router'));

app.listen(port, () => console.log(`Server is started on ${port}`));