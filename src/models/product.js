const mongoose=require('mongoose');
const schema = mongoose.Schema;
const schemaProduct=new schema({
    id:Number,
    name:String,
    description:String,
    price:Number,
    type:String,
    taste:String,
    brand:String,
    presentation:String,
    content:Number,
    img:String
});
module.exports=mongoose.model('product',schemaProduct)
