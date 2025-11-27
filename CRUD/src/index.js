import app from "./app.js";
import mongoose from 'mongoose';

const port = 3000

//Database Connection -- mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/test');

(async () => {
    try {
        //db connection
        await mongoose.connect('mongodb+srv://vikramsigma:vikramsigma@cluster0.k7nwr.mongodb.net/crud')
        console.log("Database connected successfully.");

        app.on("ERROR :", (error) => {
            console.error("ERROR :", error);
            throw error
            
        })

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        
        
    } catch (error) {
        console.error("ERROR :", error);
        throw error
        
    }
})()
