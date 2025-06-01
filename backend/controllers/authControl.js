import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';



export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(200).json('User has been created.');
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {

    try{
        console.log('Login request received',req.body);
        // console.log('Request email:', req.body.email);
        const user= await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json('User not found');
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json('Wrong password or email');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const { password, ...otherDetails } = user._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json(otherDetails);
    }

    catch (err) {
        next(err);
    }

};