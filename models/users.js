const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: false },
    surname: { type: String, required: false },
    email: { type: String, required: true},
    password: { type: String, required: true},
    subjects: { type: Array, required: false },
    isTeacher: { type: Boolean, required: false}
}, {
    timestamps: true,
},)

const User = mongoose.model("User", userSchema);

module.exports = User;