const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  language: String,
  cast: Object, //{actors:[], directors:[],producers:[]}
  gener: Array,
  certificate: String,
  duration: String,
});

module.exports = mongoose.model("Movie", schema);
