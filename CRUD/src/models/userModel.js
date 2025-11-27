import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            required: [true, 'Name is required'],
            maxLength: [50, 'Name should be less than 50 character.'],
            trim: true,
        }, 
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,

        }
    }
);

export default mongoose.model("user", userSchema)