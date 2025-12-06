const express = require('express');
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Import Models
const NewBook = require("./models/newbook");

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/BookDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};
connectToMongo();

// Health Check Route
app.get("/", (req, res) => {
    res.send("✅ Server is up and running");
});

// Multer Setup for File Uploads
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './files');
        },
        filename(req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    }),
    limits: { fileSize: 1000000 }, // 1 MB limit
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
            return cb(new Error('❌ Invalid file format.'));
        }
        cb(undefined, true);
    }
});

// Admin Book Upload Route
app.post('/adminaddbook', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).send("❌ No file uploaded.");
    const { path: filepath, mimetype, filename } = req.file;

    try {
        const obj = {
            bname: req.body.bname,
            btype: req.body.btype,
            quantity: req.body.quantity,
            price: req.body.price,
            details: req.body.details,
            imagename: filename,
            file_mimetype: mimetype,
            image: {
                data: fs.readFileSync(filepath),
                contentType: mimetype
            }
        };
        const newBook = new NewBook(obj);
        const result = await newBook.save();
        console.log("📚 New book inserted:", result);
        res.send(result);
    } catch (err) {
        console.error("❌ Error uploading book:", err);
        res.status(500).send("Something went wrong.");
    }
});

// Import Routes
const contact = require('./routes/contact');
const newbook = require('./routes/newbook');
const newstaff = require('./routes/newstaff');
const newuser = require('./routes/newuser');
const newcart = require('./routes/newcart'); // ✅ Make sure this file exists

// Use Routes
app.use("/api/contact", contact);
app.use("/api/newbook", newbook);
app.use("/api/newstaff", newstaff);
app.use("/api/newuser", newuser);
app.use("/api/newcart", newcart);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});
