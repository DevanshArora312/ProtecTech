const mongoose = require("mongoose");
const Officer = require("../models/officers.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
	try {
		const {
            firstname, lastname,
            email, mobile, password, 
			username,
            stars, role, department, thana_id
		} = req.body;

		if(!firstname || !lastname || !username || !email || !mobile || !password || !stars || !role || !department || !thana_id) {
			return res.status(404).json({
				success: false,
				message: "all fields are required",
			});
		}
        

        const existingOfficer = await Officer.findOne({
            email
        });

        if(existingOfficer){
            return res.status(404).json({
                success: false,
                message: 'Something went wrong'
            })
        }

		
		const hashedPassword = await bcrypt.hash(password, 10);

		const officer = await Officer.create({
			firstname,
			lastname,
			username,
			email,
			mobile,
			password: hashedPassword,
			username,
			stars,
			role,
			department,
			thana_id
		});

		return res.status(200).json({
			success: true,
			message: "User registered successfully",
		});

	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User couldn't be registered. Please try again.",
		});
	}
};
exports.login = async(req, res)=>{
    try{
		const {username, password} = req.body;
		if(!username || !password) {
			console.log("email and password are required");
			return res.status(400).json({
				success: false,
				message: "Email and password are required"
			})
		}
		const officer = await Officer.findOne({username: username })
		if(!officer){
			return res.status(404).json({
				success: false,
				message: "Officer not found"
			})
		}
		if(await bcrypt.compare(password, officer.password)){
			const token = jwt.sign(
				{email: officer.email},
				process.env.JWT_SECRET
			)
			return res.status(200).json({
				success: true,
				token,
				officer: officer,
				message: "Officer logged in successfully"
			})
		}
		else{
			return res.status(401).json({
				success: false,
				message: "password is incorrect"
			})
		}
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success: false, 
            message: 'Something went wrong'
        })
    }
}   