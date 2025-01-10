import jwt from 'jsonwebtoken'
import UserModel from '../Models/Auth.js'
const Verificationtoken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            // console.log('token', token)
            return res.status(303).json({ success: false, message: "Unauthorized,Please login" })
        }
        const SecureKey = "this is note app";
        const decoded = await jwt.decode(token, SecureKey);
        const user = await UserModel.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not Found" })
        }
        req.userId = user._id  //yhan se user ka id jaa rha hai create,update,sab ke liye
        console.log("tokrn" + req.userId)
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized,Invalid Token" })

    }
}
 

export { Verificationtoken }