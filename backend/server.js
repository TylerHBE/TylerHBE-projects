require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Define Schema & Model
const fileSchema = new mongoose.Schema({
    name: String,
    downloadCount: { type: Number, default: 0 }
});

// Define Schema & Model
const downloadSchema = new mongoose.Schema({
    name: String,
    file: String,
    image: String,
    imageDescription: String,
    downloads: { type: Number, default: 0 },
    fileSize: String,
    description: String
});

const File = mongoose.model("File", fileSchema);
const Download = mongoose.model("Download", downloadSchema);

// API to fetch files
app.get("/downloads", async (req, res) => {
    const downloads = await Download.find();
    res.json(downloads);
});

// API to download a file
app.get("/downloads/:filename", async (req, res) => {
    const { filename } = req.params;

    const download = await Download.findOne({ file: filename });

    res.json(download);
});

// API to download a file
app.get("/download/:filename", async (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, "files", filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }

    // Update download count
    await File.findOneAndUpdate({ name: filename }, { $inc: { downloadCount: 1 } });

    res.download(filePath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));