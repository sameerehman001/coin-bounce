const mongoose = require('mongoose');

const connectionString = "mongodb+srv://sameerehman001:samee123@cluster0.wqnxpbl.mongodb.net/coin-bounce?retryWrites=true&w=majority";

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(connectionString);
        console.log(`Database connected to host: ${conn.connection.host}`);
    } catch (error){
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;