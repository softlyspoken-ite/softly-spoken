const mongoose = require('mongoose');

const uri = "mongodb+srv://new-user:O17H4ivOno2Y1zSM@softlyspoken.pcgbr.mongodb.net/test"

const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;