// /api/verify-code.js
const mongoose = require("mongoose");

const keySchema = new mongoose.Schema({
  code: Number,
  name: String,
}, { collection: 'key' });

const Key = mongoose.model("Key", keySchema);

// MongoDB connection
const mongoURI = "mongodb+srv://amansharmayt19:nvrQpvCAPAWSEh9C@scripterx.7nhap.mongodb.net/courses?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { code } = req.body;

    try {
      const result = await Key.findOne({ code: code });

      if (result) {
        res.json({ found: true });
      } else {
        res.json({ found: false });
      }
    } catch (err) {
      res.status(500).json({ message: "Error occurred" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
