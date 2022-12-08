const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://rahma-bilal:B90wLbqKsK52fBrp@cluster0.1eogt36.mongodb.net/sna-db";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
