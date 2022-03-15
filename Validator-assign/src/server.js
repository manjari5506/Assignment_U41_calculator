const express = require("express");

const connect = require("./config/db");

const usersController = require("./controllers/user.controller");

const app = express();

app.use(express.json());
app.use("/users",usersController);

const start = async () => {
    
        await connect();
        app.listen(5000, () => {
        console.log("listening on port 5000");
    });

};
module.exports = start;
