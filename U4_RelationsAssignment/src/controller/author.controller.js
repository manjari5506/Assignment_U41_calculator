const express = require("express");

const Author = require("../model/author.model");


const router = express.Router();

router.get("", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();

    return res.status(200).send({ author: author }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("./id", async (req, res) => {
    try {
      const author = await model.create(req.body);
  
      return res.status(201).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
   
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

  router.delete("./id" , async(req, res) => {
    try {
      const author = await model.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;
