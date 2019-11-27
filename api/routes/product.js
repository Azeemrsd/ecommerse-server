const express = require('express');
//adding routes
const router = express.Router();
//Handling GET response for /products
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Product GET response'
    })
})
//Handling POST response for /products

router.post('/', (req,res,next)=>{
    res.status(201).json({
        message:'Product Post Response'
    })
})
//Handling GET response for /products/someId

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:'This is an special id',
            id:id
        })
    }else{
        res.status(200).json({
            message:'Not an special id'
        })
    }
})
//Handling patch response 
router.patch('/', (req,res,next)=>{
    res.status(200).json({
        message:'Updated product'
    })
})
//Hnadling Delete response
router.delete('/', (req,res,next)=>{
    res.status(200).json({
        message:'Deleted products'
    })
})
module.exports = router;