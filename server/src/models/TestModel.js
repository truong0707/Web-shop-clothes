const mongoose = require("mongoose");
const Schema = mongoose.Schema; // use Schema of mongoose

const ownerSchema = new Schema({
    name: String,
    // dog: {type: mongoose.Types.ObjectId, ref:"Dog"}
})

const dogSchema = new Schema({
    name: String,
    owner: [
        { type: mongoose.Types.ObjectId, ref: "Owner" }
    ]
})

const Owner = mongoose.model("Owner", ownerSchema);
const Dog = mongoose.model("Dog", dogSchema);

module.exports = {
    Owner,
    Dog
};