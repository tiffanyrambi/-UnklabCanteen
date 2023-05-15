const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    asrama: { type: String, required: [true, "asrama harus diisi"] },
});

const User = mongoose.model("User", userSchema);

module.exports = User