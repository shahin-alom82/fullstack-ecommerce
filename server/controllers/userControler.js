import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt'



const userLogin = (req, res) => {

};


// User Register Start

const userRegister = async (req, res) => {
      try {


            const { name, email, password } = req.body;

            // Request body varification
            if (!name) {
                  return res.json({
                        success: false,
                        message: 'Name is required!'
                  })
            }
            if (!email) {
                  return res.json({
                        success: false,
                        message: 'Email is required!'
                  })
            }
            if (!password) {
                  return res.json({
                        success: false,
                        message: 'Password is required!'
                  })
            }

            // Email validation
            if (!validator.isEmail(email)) {
                  return res.json({
                        success: false,
                        message: 'Please enter a valid email address'
                  })

            }

            // Check user status
            const existing = await userModel.findOne({ email })
            if (existing) {
                  return res.json({ success: true, message: 'User already exists!' })
            }

            // Password validation
            if (password.length < 8) {
                  return res.json({
                        success: true,
                        message: 'Password length should be equal or trater than 8 '
                  })

            }

            // Hashing user password
            const salt = await bcrypt.genSalt(10)
            const encryptedPassword = await bcrypt.hash(password, salt)

            // Register a new User
            const newUser = new userModel({
                  name,
                  email,
                  password: encryptedPassword
            })

            // Save user in database
            await newUser.save()

            // Success Register 
            res.json({
                  success: true,
                  message: 'User Registered Successfully!'
            })
      } catch (error) {
            console.log('User register error!', error)
            res.json({ success: true, message: error?.message })
      }
};

// User Register End



const adminLogin = (req, res) => { };
const removeUser = (req, res) => { };
const updateUser = (req, res) => { };
const getUser = (req, res) => {
      res.send('Hello From Users!')
};

export { userLogin, userRegister, adminLogin, removeUser, updateUser, getUser }