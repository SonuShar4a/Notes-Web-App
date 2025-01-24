import Jwt from "jsonwebtoken";
import UserModel from "../Models/Auth.js"
import bcrypt from "bcryptjs"
const Register = async (req, res) => {
    try {
        console.log(req.body);
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.status(303).json({ success: false, message: "All fildes are required" })
        }
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(303).json({ success: false, message: "User already exist Please Login" })
        }

        const hasepassword = await bcrypt.hashSync(password, 10)
        const Newuser = new UserModel({
            userName, email, password: hasepassword
        })
        Newuser.save()
        res.status(200).json({ success: true, message: "User Register Successfully", User: Newuser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const Login = async (req, res) => {
       
    try {
        
        console.log(req.body);
        const { email, password } = req.body
        const FindUser = await UserModel.findOne({ email })
        if (!FindUser) {
            return res.status(404).json({ success: false, message: "User Not found please Register" })
        }
        const comparePassword = await bcrypt.compare(password, FindUser.password)
        if (!comparePassword) {
            return res.status(303).json({ success: false, message: "Invalid Password" })
        }

       
        const token = await Jwt.sign({userId: FindUser._id },SecureKey, { expiresIn: "3d" })
        // console.log("tok"+token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 3600 * 1000
        })
        res.status(200).json({
            success: true, message: "Login Successfully", user: FindUser,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

    const Logout = async (req, res) => {
        try {
            res.clearCookie("token")
            res.status(200).json({
                success: true, message: "User Logout Successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    }
export { Register, Login, Logout }
