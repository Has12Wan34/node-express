const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
});

// use in model -> post is a name collection in mongodb database
module.exports = new mongoose.model("get", schema);