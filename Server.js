const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//DB Connection
connectDB();

//Init Middleware
app.use(express.json({extended: false}))

app.use('/api/users', require('./routes/Users'));
app.use('/api/auth', require('./routes/Auth'));
app.use('/api/contacts', require('./routes/Contacts'));

//Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log("App is running on port " + port);
});