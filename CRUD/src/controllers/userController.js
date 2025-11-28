import User from '../models/userModel.js'

export const home = (req, res) => {
    res.send("Hello world");
}

export const createUser = async (req, res) => {
    //extract information
    try {

        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error('Name and Email are required')
        }

        const userExists = await User.findOne({email});

        if (userExists) {
            throw new Error('User already exists.')
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user
        })
        
    } catch (error) {
        console.error("ERROR :", error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export const getUsers = async (req, res) => {
    try {

        const users = await User.find({});

        res.status(200).json({
            success: true,
            message: 'Data downloaded successfully',
            users
        })
        
    } catch (error) {
        console.error("ERROR", error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }
}