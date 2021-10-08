const product = require("../models/product");
module.exports={
    index:async(req,res,next)=>{
        const products=await product.find({})
        res.status(200).json({products});
    },
    newProduct:async(req,res,next)=>{
        debugger;
        const newProduct=new product(req.body);
        console.log(req.body)
        console.log(newProduct)
        const produ=await newProduct.save();
        res.status(200).json(produ);
    },
    findProduct:async(req,res,next)=>{
        const query=req.body;
        const quer=await product.find(query);
        res.status(200).json(quer);
    }
};

