import mongoose from 'mongoose'

const connectToDB = async () => {
    try {

        await mongoose.connect(process.env.DB_URI)
        console.log("DB connected successfully.");
        
        
    } catch (error) {
        console.error("ERROR :", error);
        process.exit(1); // stop server
    }
}

export default connectToDB