const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://manjari:pattinson@cluster0.fjd30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

module.exports = connect;