const express = require('express');
const serverConfig = require('./configs/server.config.json')
const app = express();
const cors = require('cors')
const mailRoute = require('./routes/mail.route')



// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

app.use('/', mailRoute)

app.listen(serverConfig.PORT, () => {
    console.log('server is running port', serverConfig.PORT);
})



