import { User } from "../model/authSchema.js";
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../utils/genrateTokenAndSetCookie.js";
import { sendEmail, sendPasswordResetEmail, sendResetSuccessfullEmail } from '../config/sendEmail.js'
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (!userName || !email || password) {
            return res.status(401).json({ message: "All Fields Required" });
        }
        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(401).json({ message: "User Already Exits" });
        }
        const hashpassword = await bcrypt.hash(password, 8);

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const hashToken = await bcrypt.hash(verificationToken, 8);
        const user = new User({
            userName,
            email,
            password: hashpassword,
            verificationToken: hashToken,
            verificationTokenExpiresDate: Date.now() + 24 * 60 * 60 * 1000
        })

        await user.save();
        generateTokenAndSetCookie(res, user);
        await sendEmail(email, verificationToken, userName);
        res.status(201).json({ success: true, message: "Account created successfully" });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(401).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        user.lastLogin = Date.now();

        generateTokenAndSetCookie(res, user);
        res.status(200).json({ success: true, message: "user successfully logged In" })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const verifyEmail = async (req, res) => {
    const { code } = req.body;

    try {
        const user = await User.findOne({
            verificationTokenExpiresDate: { $gte: Date.now() },
            verificationToken: { $exits: true }
        })
        if (!user) {
            return res.status(401).json({ message: "Token is expired" });
        }

        const isMatch = await bcrypt.compare(code, user.verificationToken);

        if (!isMatch) {
            return res.status(401).json({ message: "Invaid Token " })
        };


        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresDate = undefined;
        await user.save();
        res.status(200).json({ success: true, message: "User Verified" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User Not found" });
        }
        const resetPasswordResetToken = Math.floor(100000 + Math.random * 900000).toString();
        const resetPasswordExpiresDate = new Date(Date.now() + 1 * 60 * 60 * 1000);


        user.resetPasswordToken = resetPasswordResetToken;
        user.resetPasswordExpiresDate = resetPasswordExpiresDate;

        await user.save();
        await sendPasswordResetEmail(email, user.userName, `${process.env.CLIENT_URL}/reset-password/${resetPasswordResetToken}`);

        res.status(200).json({ message: "Forgot Password email Sent succesfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const resetPassord = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;


    try {
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresDate: { $gte: Date.now() } });
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }
        const hashpassword = await bcrypt.hash(password, 8);
        user.password = hashpassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresDate = undefined;
        await sendResetSuccessfullEmail(user.email);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Unexpected Error Occurs"})
    }
}
export { registerUser, loginUser, verifyEmail,forgotPassword,resetPassord };