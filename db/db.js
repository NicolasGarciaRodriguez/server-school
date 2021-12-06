const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/School_Server"

const dbConnection = mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = { dbConnection, DB_URL }