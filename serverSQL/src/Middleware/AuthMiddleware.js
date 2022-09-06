const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer") // nguoi mang token
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded)
            // console.log(req.headers.authorization)

            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("Not authorized, no failed");
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("Not authorized, no token");
    }
});

module.exports = {
    protect
}