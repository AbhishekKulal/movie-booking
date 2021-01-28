const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  language: String,
  cast: Object, //{actors:[], directors:[],producers:[]}
  genre: Array,
  certificate: String,
  duration: Date,
});

module.exports = mongoose.model("Movie", schema);
