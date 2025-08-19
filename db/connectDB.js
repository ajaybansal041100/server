const mongoose = require('mongoose')
const Live_url = "mongodb+srv://ajay_0012:12345@cluster0.lmxaw7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    return mongoose.connect(process.env.Live_url)
        .then(() => {
            console.log("Database Connect Successful");
        })
        .catch(() => {
            console.log(error);
        });
};
module.exports = connectDB;