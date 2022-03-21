const Publication = require("../models/publication.model.js")



const router = express.Router()

router.post('',

body("timestamps").withMessage("time stamp is required")
,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmplty()){
       return res.status(201).json({data: error.array()});
    }
    const publication = await Publication.create(req.body)
    return res.status(200).json({data : publication})
})
module.exports = router;