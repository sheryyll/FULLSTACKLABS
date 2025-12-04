const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/shop',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

const productSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category: {
        type:String,
        required:true,
    }
},{timestamps:true}
);

const Product = mongoose.model('Product', productSchema);

app.get('/products', async(req, res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

app.post('/products', async(req, res) =>{
    try{
        const {name, price, category} = req.body;
        const newProduct = new Product({name, price, category});

        await newProduct.save();
        res.status(201).json(newProduct);
    } 
    catch(err){
        res.status(400).json({error:err.message});
    }

});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})