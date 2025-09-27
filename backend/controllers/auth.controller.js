import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signupUser = async(req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"password dont match"})
        }

    const user = await User.findOne({username});
 
    if(user){
        return res.status(400).json({error:"user already exists"})
    }
// hash password
const salt = await bcryptjs.genSalt(10);
const hashedPassword = await bcryptjs.hash(password,salt);


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
    }); 

    if (newUser){
     generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic:newUser.profilePic
        });
    }else{
        res.status(400).json({error:"invalid user data"});
    }
    }catch(error){
        console.log("error in signup controller", error.message);
        res.status(500).json({error:"internal server error"});
    }
};

export const loginUser = async(req, res) => {
   try{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"invalid username or password"});
    }

    generateTokenAndSetCookie(user._id, res);


    res.status(200).json({
        _id: user._id,
        fullname: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
    });

   }catch(error){
    console.log("error in login controller", error.message);
    res.status(500).json({error:"internal server error"});
   } 
};

export const logoutUser = async(req, res) => {
  try{
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message:"logged out successfully"});
  }catch(error){
    console.log("error in logout controller", error.message);
    res.status(500).json({error:"internal server error"});
  }
};  
