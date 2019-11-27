const express = require('express');
const router = express.Router();
//Handling GET response for /orders
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Orders GET response'
    })
})
//Handling POST response for /orders

router.post('/', (req,res,next)=>{
    res.status(201).json({
        message:'Orders Post Response'
    })
})
//Fetching a perticular order
router.get('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:'Order details'
    })
})
//Deleting a perticular order
router.delete('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:'Order deleted'
    })
})

module.exports = router;