const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    dishes:[
        {
            price:{
                 type:Number,
                 required:true
            },
            name:{
                type:String,
                required:true
            }
               
        }
    ]
    ,
    imageUrl:{
        type:String,
        required:true
    }

})

const Product=mongoose.model('product',productSchema);

module.exports=Product;