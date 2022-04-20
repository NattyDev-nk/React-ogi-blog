const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async (req,res) =>{
    try{
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            //the bcrypt and salt above help us to hide our password in the database
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
            })
            const user = await newUser.save();
            res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials!");

        //here we are validating the username and password to confirm if the username and password in the database match with the current one the user is inputing!
        //if the above is correct, the the user is allow in, as shown in the code below
        //the._doc code is added to remove the password entirele from the database

        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router