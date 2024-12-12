const express = require('express');
const router = express.Router();
const Product = require('../models/Product');  
const { singleUpload } = require('../middlewares/FileUpload');  
const methodOverride = require('method-override');
const isadmin = require('../middlewares/isAdmin');

router.use(methodOverride('_method'));

// Get all products for admin panel
router.get("/admin", isadmin, async (req, res, next) => {
    try {
        const user = req.user;  
        const products = await Product.find();  
        res.render('addFood', { foods: products, user });
    } catch (err) {
        next(err);
    }
});

// Add a new product
router.post("/admin", isadmin, singleUpload, async (req, res, next) => {
   if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
   }

   const { name, price } = req.body;
   const image = req.file.filename; 
   if (!name || !price) {
      return res.status(400).send({ message: "Name and price are required" });
   }

   try {
       const existingProduct = await Product.findOne({ name: name.toLowerCase() });

       if (existingProduct) {
           return res.status(409).send({ message: "Food item already exists" });
       }

       const newProduct = new Product({
           name,
           price,
           image,  
       });

       await newProduct.save();

       res.status(201).send(`
        <script>
            alert('Food Item is added successfully');
            window.location.href = "/admin"; // Redirect to admin page
        </script>
    `);
   } catch (err) {
       next(err);  
   }
});

// Delete a product by _id
router.delete("/admin/:id", isadmin, async (req, res, next) => {
   const productId = req.params.id;

   try {
       const product = await Product.findByIdAndDelete(productId);

       res.status(201).send(`
        <script>
            alert('Food Item is deleted successfully');
            window.location.href = "/admin"; // Redirect to admin page
        </script>
    `);

   } catch (err) {
       next(err);
   }
});

// Update product by _id
router.put('/admin/:id', isadmin, singleUpload, async (req, res, next) => {
    const productId = req.params.id;
    const { name, price } = req.body;

    try {
        const product = await Product.findById(productId);

        // Update product details
        product.name = name || product.name;
        product.price = price || product.price;

        // Update image path
        if (req.file) {
            product.image = req.file.filename;
        }

        await product.save();

        res.status(201).send(`
            <script>
                alert('Food Item updated successfully');
                window.location.href = "/admin";
            </script>
        `);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
