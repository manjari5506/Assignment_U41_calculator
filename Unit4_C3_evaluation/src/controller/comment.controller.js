const Comment = require("../models/comment.model.js")



const router = express.Router()

router.post('',
body("timestamps").withMessage("time stamp is required")
,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmplty()){
       return res.status(201).json({data: error.array()});
    }
    const comment = await Comment.create(req.body)
    return res.status(200).json({data : comment})
})
module.exports = router;