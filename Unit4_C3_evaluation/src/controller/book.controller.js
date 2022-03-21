const Book = require("../models/book.model.js")



const router = express.Router()

router.post('',
body("coverImage").isLength({min:1}).withMessage("cover image is required"),
body("content").isLength({min:1,max:150}).withMessage("content is required")
,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmplty()){
       return res.status(201).json({data: error.array()});
    }
    const book = await Book.create(req.body)
    return res.status(200).json({data : book})
})
module.exports = router;