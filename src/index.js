const express = require('express');
const bodyParser  = require('body-parser');


const {PORT} =require("./config/server.config");
const apiRouter = require('./routes/index');
const errorHandler = require('./utilities/errorHandler');
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
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})