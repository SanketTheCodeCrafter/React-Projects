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