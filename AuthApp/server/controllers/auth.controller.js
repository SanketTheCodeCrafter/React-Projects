import User from '../models/user model.js';
import bcrypt from 'bcrypt';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

const signup = async (req, res, next) => {
    console.log(req.body)

    const { username, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    })

    try {
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        next(error);
    }
}

export { signup }

const signin=async (req, res, next)=>{
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, "User not found"));
        }

        const validPassword = await bcrypt.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorHandler(401, "Invalid credentials"));
        }

        const token=jwt.sign({id:validUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const {password:hashedpassword, ...others} = validUser._doc;

        res.cookie('access_token', token, {httpOnly: true, maxAge: 60 * 60 * 1000}).status(200).json(others);

    } catch (error) {
        next(error);
    }
}

export { signin }

const google = async (req, res, next)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            const token=jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
            const {password: hashedpassword, ...rest} =user._doc;
            const expiryDate=new Date(Date.now() + 3600000);
            res.cookie('access_token', token, {httpOnly: true, maxAge: 3600000, expires: expiryDate}).status(200).json(rest);
        }else{
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedpassword = bcrypt.hashSync(generatePassword, 10);
            const newUser = new User({
                username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8),
                email: req.body.email,
                password: hashedpassword,
                profilePicture: req.body.photo,
            });
            await newUser.save();
            console.log(newUser)
            const token=jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const { password: hashedpassword2, ...others } = newUser._doc;
            const expiryDate= new Date(Date.now() + 3600000);
            res.cookie('access_token', token, {httpOnly: true, expires: expiryDate, }).status(200).json(others);
        }
    } catch (error) {
        next(error)
    }
}

export { google}

const signout = (req, res)=>{
    res.clearCookie('access_token');
    res.status(200).json({ message : "User signed out successfully!"});
}

export { signout }