import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";

// Register Users
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

   // Prevent user from creating account that is already existing base on email
   const userExist = await User.findOne({ email });
   if (userExist)
     return response.status(400).json({ error: "User already exist" });


   const adminEmail = "admin@asquarez.com";
   // Prevent registration of the admin email through public form
   if (email === adminEmail) {
     return res.status(403).json({ error: "Access denied" });
   }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Assign role base on email
    const role = email === "admin@asquarez.com" ? "admin" : "user";
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user"
    });

    const savedUser = await newUser.save();
    return res.status(201).json({
      message: "Account Successfully Created",
      savedUser: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get all Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Get single user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User does not exist" });

    const checkIsPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkIsPasswordMatch) {
      return res.status(401).json({ message: "Invalid user credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    //  deletUserPassword
    const { password } = user._doc;

    res.status(200).json({
      message: "Login successfull",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateUserData = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );
    res.status(200).json(updateUserData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.tokenExpriration = Date.now() + 1000 * 60 * 60;
    await user.save();

    const resetLink = `https://asquarez-shop.vercel.app/reset-password/${token}`;

    await sendEmail(
      user.email,
      "Password Reset Request",
      `<p>Click below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link expires in 1 hour</p>`
    );

    console.log("Reset link", resetLink);

    res.json({ message: "Reset link sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetToken: token,
      tokenExpriration: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
    user.resetToken = undefined;
    user.tokenExpriration = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
