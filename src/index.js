const express = require('express');
const bodyParser  = require('body-parser');
const {PORT} =require("./config/server.config");
const apiRouter = require('./routes/index');
const errorHandler = require('./utilities/errorHandler');
const connectToDB = require('./config/db.config');
const { Problem } = require('./models');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use("/api",apiRouter)

app.get("/ping",(req,res)=>{
    return res.json({Message:"Hello from ping"})
})

// last middleware if any error comes
app.use(errorHandler);
// express has defualt error handler it errorHandler middleware is not used default error handler is triggered
app.listen(PORT,async ()=>{
    console.log(`Server is running at PORT ${PORT}`);
    await connectToDB();
})