import mongoose from "mongoose";
const mongoUrl = "mongodb+srv://porfolio_subham:2zLVQFRP1F9md4GK@cluster0.wxr8ov7.mongodb.net/porfolio" 

const database = async () => {
    try {
      const conn = await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log(`🔗🔗🔗🔗 MongoDB Connected: ${conn.connection.host} 🔗🔗🔗🔗`);
      console.log('Connection to the database is successful✅.');
    } catch (error) {
      console.error(
        `🔗‍💥🔗‍💥🔗‍💥🔗‍💥  ${error.message} 🔗‍💥🔗‍💥🔗‍💥🔗‍💥`
      );
      console.log('Could not connect to the database.', error);
      process.exit(1);
    }
}

export default database