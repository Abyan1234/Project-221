const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:'abyanmazhar41@gmail.com',
        pass:'ccvuormbtfmrorxw'
    },
    secure:true

})

server.listen(process.env.PORT || 3030);