const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MOONGODB_URL);
        console.log('Connect successfully...')
    } catch (error) {
        console.log('Connect failed...')
    }
}

module.exports = { connect }