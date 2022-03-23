const express = require("express")
const connect = require("./config/db")
const app = express();

app.use(express.json());


const submissionController = require("./controller/submission.controller");

app.use("/submission", submissionController);

app.listen(7000, async () => {
    try {
      await connect();
      console.log("listening on port 7000");
    } catch (err) {
      console.log(err);
    }
  
  });
  


