const mongoose = require("mongoose")

const Contactschema = new mongoose.Schema(
    {
        fullname: { type: String },
        email: { type: String },
        pnomber: { type: String },
        gender: { type: String },
        useremail: { type: String },
    },

    { timestamps: true }

);

module.exports = mongoose.model("contact", Contactschema );