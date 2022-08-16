const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express()
const PORT = process.env.PORT || 3003;

// require('dotenv');

// //Handlebars
// const hbs = exphbs.create({ /* helpers */ });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
// app.use(session(sess))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);


// app.get('/', (req, res) => {
//     res.render('Hello World');
//   });
app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`))

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });
