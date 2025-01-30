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
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Define Schema & Model
const fileSchema = new mongoose.Schema({
    name: String,
    downloadCount: { type: Number, default: 0 }
});

const File = mongoose.model("File", fileSchema);

// API to fetch files
app.get("/files", async (req, res) => {
    const files = await File.find();
    res.json(files);
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