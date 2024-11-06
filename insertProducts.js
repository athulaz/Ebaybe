// insertProducts.js
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Adjust the path if necessary
require('dotenv').config();

// Sample product data
const products = [
  {
    name: "iPhone 14 Pro ",
    price: 1099,
    description: "The iPhone 14 Pro Max features a 6.7-inch Super Retina XDR display, A15 Bionic chip, and an advanced triple-camera system.",
    category: "Smartphones",
    images: ["https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691141505g"],
    stock: 50,
  },
  {
    name: "MacBook Pro 16-inch",
    price: 2499,
    description: "The MacBook Pro 16-inch comes with the M1 Pro chip, 16GB RAM, and 512GB SSD, delivering powerful performance for professionals.",
    category: "Laptops",
    images: ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStyY2nynNR-qGGVYji6UfaVCF14L2TsNuxc3gePqBrYTA2bBIXcTPZyo9LXhQqkhoH4ODobYuqFK1rU7BwstIQbMExT7f8NOK9AJGdcWymtdVikJSoexjc7g&usqp=CAE"],
    stock: 30,
  },

  {
    name: "iPhone 15 Pro ",
    price: 1099,
    description: "The iPhone 15 Pro Max features a 6.7-inch Super Retina XDR display, A15 Bionic chip, and an advanced triple-camera system.",
    category: "Smartphones",
    images: ["https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1695435375&width=176"],
    stock: 50,
  },
 
];

// Connect to MongoDB and insert products
const insertProducts = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Insert sample products
    await Product.insertMany(products);
    console.log("Sample products inserted successfully");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting products:", error);
    mongoose.disconnect();
  }
};

insertProducts();
