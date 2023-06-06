import mongoose from "mongoose";


const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
      .then(() => console.log('connected to mongo'))
      .catch((err) => {
        console.error('failed to connect with mongo');
        console.error(err);
      });
  };
  
// const connectDB = (url) => {
//     mongoose.set('strictQuery', true)

//     mongoose.connect(url)
//     .then(() => console.log('MongoDb connected'))
//     .catch((err) => console.log('Mongoose ERROR ============> ',err))
// }

export default connectDB