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

export const deleteUser = async (req, res) => {
    try {

        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: 'User deleted successfully.',
            user
        })
        
    } catch (error) {
        console.error("ERROR :", error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const editUser = async (req, res) => {
    try {

        const userId = req.params.id;
        const updateData = req.body;
        const user = await User.findByIdAndUpdate(
            userId, 
            updateData,
            { new: true, runValidators: true } //return updated user
        );

        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user
        })
        
    } catch (error) {

        console.error("ERROR :", error);
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}