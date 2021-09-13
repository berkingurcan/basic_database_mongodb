require('./models/db');

const personController = require('./controllers/personController');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const bodyparser =  require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');



var app = express();
app.use(express.urlencoded({
    extended: true
}));

app.listen(3003, () => {
    console.log('Express server started at 3003');
});

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({handlebars: allowInsecurePrototypeAccess(Handlebars), extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

app.use('/person', personController);
