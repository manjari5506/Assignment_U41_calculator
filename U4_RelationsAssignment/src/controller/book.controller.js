const express = require("express");

const Book = require("../model/book.model");


const router = express.Router();

router.get("", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();

    return res.status(200).send({ book: book }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("./id", async (req, res) => {
    try {
      const book = await model.create(req.body);
  
      return res.status(201).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();
    

    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
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
      const book = await model.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;
