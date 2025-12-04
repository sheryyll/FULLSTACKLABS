const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/shop').then(()=> console.log(`Connected to mongoDB`))
.catch((err)=> console.log(err));

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String, 
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        inStock:{
            type:Boolean,
            default:true,
        }
    },{timestamps:true}
    
);

const Product =  mongoose.model('Product', productSchema);

async function insertProducts(){
    const count = await Product.countDocuments();
    if(count === 0){
        await Product.insertMany([
            { name: "Smartphone", price: 3000, category: "Electronics" },
            { name: "Desk", price: 1500, category: "Furniture" },
            { name: "Chair", price: 800, category: "Furniture" },    
        ]);
        console.log("Inserted initial products");
    }
}
insertProducts();

app.get('/', async(req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "failure to fetch products"});
    }
});

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`)
});