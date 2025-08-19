const mongoose = require('mongoose')
const LIVE_URL= "mongodb+srv://ajay_0012:12345@cluster0.lmxaw7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    return mongoose.connect(process.env.LIVE_URL)
        .then(() => {
            console.log("Database Connect Successful");
        })
        .catch((error) => {
            console.log(error);
        });
};
module.exports = connectDB;