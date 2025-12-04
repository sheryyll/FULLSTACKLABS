const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";   // MongoDB URL
const dbName = "shop";                    // Database name
const collectionName = "products";        // Collection name

async function main() {
    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // -------------------------------------------
        // INSERT OPERATION
        // -------------------------------------------
        const newProduct = {
            name: "Laptop",
            price: 7000,
            category: "Electronics"
        };

        const insertResult = await collection.insertOne(newProduct);
        console.log("Inserted ID:", insertResult.insertedId);

        const insertResult2 = await collection.insertMany([
            { name: "Smartphone", price: 3000, category: "Electronics" },
            { name: "Desk", price: 1500, category: "Furniture" },
            { name: "Chair", price: 800, category: "Furniture" }
        ]);
        console.log("Inserted IDs:", insertResult2.insertedIds);
        // -------------------------------------------
        // FIND OPERATION
        // -------------------------------------------
        const products = await collection.find({}).toArray();
        console.log("Found Products:", products);

        // -------------------------------------------
        // UPDATE OPERATION
        // -------------------------------------------
        const updateResult = await collection.updateOne(
            { name: "Laptop" },             // filter
            { $set: { price: 8000 } }       // update operation
        );

        console.log("Updated Count:", updateResult.modifiedCount);

        // -------------------------------------------
        // DELETE OPERATION (optional)
        // -------------------------------------------
        const deleteResult = await collection.deleteOne({ name: "Laptop" });
        console.log("Deleted Count:", deleteResult.deletedCount);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

main();
