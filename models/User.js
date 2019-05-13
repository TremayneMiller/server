const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// different way of usage
const { Schema } = mongoose;

// create user Schema
const userSchema = new Schema({
  googleID: String
});

//create user model
mongoose.model("users", userSchema);
