import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},"LwsfMwXWXz3jRX4+swG+5XOaHRoGBSz0nXSCFD/hSXQ=", {
        expiresIn: "15d"
    });
    
    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;