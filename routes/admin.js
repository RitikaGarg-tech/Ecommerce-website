const path=require('path');
const express=require('express');
const rootDir=require('../util/paths');
const router=express.Router();
const products=[];

router.use('/addproduct',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});
router.post('/addproduct',(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
});
exports.routes=router;
exports.products=products;
