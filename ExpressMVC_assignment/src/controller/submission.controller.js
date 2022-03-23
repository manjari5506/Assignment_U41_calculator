const express = require("express");

const Submission = require("../model/submission.model.js");
const Student = require("../model/student.model.js");


const router = express.Router();

router.get("/:studentId", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id).lean().exec();

    return res.status(200).send({ submission: submission }); 
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("evaluationId", async (req, res) => {
  try {
    const marks = await Submission.findById(req.params.id).lean().exec();
    var max = 0;
    if(marks > max){
        max = marks;
    }
    marks = max;
    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("marks", async (req, res) => {
    try {
        const  student= await Student.find(req.params.id).lean().exec();
      
      return res.status(200).send(student);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  


  

module.exports = router;
