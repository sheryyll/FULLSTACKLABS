const express = require('express');
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
})

const products = [
    {id:1, name: 'Laptop', price: 50000},
    {id:2, name: 'Phone', price: 20000},
    {id:3, name: 'Tablet', price: 15000}
];

app.get('/products', (req,res) =>{
    res.json(products);
});

app.get('/products/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id == id);
    if(!product){
        return res.status(404).json({message: 'Product not found'});
    }
    res.json(product);
});

app.post('/products', (req,res) => {
    const {name, price} = req.body;

    if(!name || !price){
        return res.status(400).json({message: 'Name and Price are missing'});
    }

    const newProduct = {
        id: products.length + 1,
        name, price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);

});

app.put('/products/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id == id);
    if(!product){
        return res.status(404).json({message: 'Product not found'});
    }
    const {name, price} = req.body;
    product.name = name || product.name;
    product.price = price || product.price;
    res.json(product);
})

app.delete('/products/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id == id);
    if(index === -1){
        return res.status(404).json({message: 'Product not found'});
    }
    products.splice(index,1);
    res.json({message: 'Product deleted successfully'});    
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});