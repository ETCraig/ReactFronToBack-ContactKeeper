const express = require('express');
const connectDB = require('./config/db');

const app = express();

//DB Connection
connectDB();

//Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.json({msg: 'Welcome to the Contact Keeper API!'}));

app.use('/api/users', require('./routes/Users'));
app.use('/api/auth', require('./routes/Auth'));
app.use('/api/contacts', require('./routes/Contacts'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is working on port: ${PORT}`));