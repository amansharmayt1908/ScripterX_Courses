const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI + 'courses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB - courses database');
});

// Define the key schema
const keySchema = new mongoose.Schema({
    code: String
});

// Create the Key model
const Key = mongoose.model('key', keySchema, 'key');

// Create and save the document with code "19"
async function addKey() {
    try {
        const newKey = new Key({
            code: "19"
        });
        
        await newKey.save();
        console.log('Successfully added key with code 19');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error adding key:', error);
        mongoose.connection.close();
    }
}

addKey();
