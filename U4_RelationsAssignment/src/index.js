const express = require("express");

const connect = require("./config/db")
const app = express();

app.use(express.json());

const bookController = require("./controller/book.controller.js");
const sectionController = require("./controller/section.controller.js");
const authorController = require("./controller/author.controller.js");



app.use("/book", bookController); 
app.use("/section",sectionController);
app.use("/author", authorController);

app.listen(5000, async () => {
    try {
      await connect();
      console.log("listening on port 5000");
    } catch (err) {
      console.log(err);
    }
  
  });
  

