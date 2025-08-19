const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')




const checkAuth = async (req, res, next) => {
    const token = req.cookies.token;
    //console.log(token)
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, 'qwertyui123');
        console.log(decoded)
        // fetch full user from DB
        const user = await UserModel.findById(decoded.ID);
        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = user; //full user now available including email
        //consoe.log(req.user)
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: "Invalid token" });
    }
}


module.exports = checkAuth