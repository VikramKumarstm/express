import User from '../models/userModel.js'

export const home = (req, res) => {
    res.send("Hello world");
}

export const createUser = async (req, res) => {
    //extract information
    try {

        const { name, email } = req.body;

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