const mongoose = require('mongoose')

module.exports.connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect MongoDB Success!")
    } catch (e) {
        console.log("Connect MongoDB Error!")
    }
}
