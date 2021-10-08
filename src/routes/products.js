const express=require("express");
const router=express.Router();

//controller
const{index,newProduct,findProduct}=require("../controllers/product");
//map
router.get("/",index);
router.post("/newProduct", newProduct);
router.post("/findProduct", findProduct)
module.exports=router;