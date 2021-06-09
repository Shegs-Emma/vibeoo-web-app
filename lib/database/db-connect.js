import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState < 1) {
    mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }
  console.log('mongo-uri', process.env.DATABASE_URI);
  console.log('mongoAtlas is hot');
}

export default dbConnect;
