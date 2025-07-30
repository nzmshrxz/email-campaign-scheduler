const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
require('./utils/emailScheduler');


// Config
dotenv.config();
const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// View Engine (Handlebars)
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const campaignRoutes = require('./routes/campaignRoutes');
app.use('/', campaignRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
