import User from '../models/user model.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    console.log(req.body)

    const { username, email, password } = req.body;
    const hashedpassword=bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    })

    await newUser.save()
        .then(() => {
            res.status(201).json({
                message: 'User created successfully',
                user: newUser,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Error creating user',
                error: err,
            });
        });
}

export { signup }