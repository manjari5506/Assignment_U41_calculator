const express = require("express");

const Section = require("../model/section.model");


const router = express.Router();

router.get("", async (req, res) => {
  try {
    const section= await Section.find().lean().exec();

    return res.status(200).send({ section: section }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("./id", async (req, res) => {
    try {
      const section= await model.create(req.body);
  
      return res.status(201).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
   
    return res.status(200).send(section);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

 

module.exports = router;
