const mongoose = require("mongoose");
const fs = require("fs");

mongoose.connect("mongodb://<USERNAME>:<PASSWORD>@ac-pdhehzc-shard-00-00.mqc0sj9.mongodb.net:27017,ac-pdhehzc-shard-00-01.mqc0sj9.mongodb.net:27017,ac-pdhehzc-shard-00-02.mqc0sj9.mongodb.net:27017/?ssl=true&replicaSet=atlas-c6mmvf-shard-0&authSource=admin&appName=Cluster0")

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    data:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

const seedDatabase = async () => {
    try {
        const rawData = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

        const cleanedData = rawData.map(product => {
            // Fix the date
            if (product.data && product.data.$date) {
                product.data = product.data.$date;
            }
            
            if (product._id) {
                delete product._id;
            }

            return product;
        });

        await Product.deleteMany({});
        console.log("Old products cleared.");

        // Insert the cleaned data
        await Product.insertMany(cleanedData);
        console.log("Database successfully seeded with new products!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding database: ", error);
        mongoose.connection.close();
    }
};

seedDatabase();