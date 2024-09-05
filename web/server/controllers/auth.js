const mongoose = require("mongoose");
const Officer = require("../models/officers.js");
const bcrypt = require("bcrypt");


exports.signup = async (req, res) => {
	try {
		const {
            firstname, lastname,
            email, mobile, password, 
            stars, role, department, thana_id
		} = req.body;

		if(!firstname || !lastname || !email || !mobile || !password || !stars || !role || !department || !thana_id) {
			return res.status(404).json({
				success: false,
				message: "all fields are required",
			});
		}
        

        const existingOfficer = await Officer.findOne({
            email
        });

        if(email){
            return res.status(404).json({
                success: false,
                message: 'Something went wrong'
            })
        }

		const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

		if (response.length === 0) {
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			return res.status(400).json({
				success: false,
				message: "Incorrect otp",
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		let approved = "";
		approved === "Instructor" ? (approved = false) : (approved = true);
		const profileDetails = await Profile.create({
			gender: null,
			dateOfBirth: null,
			about: null,
			contactNumber: null,
		});
		const user = await User.create({
			firstName,
			lastName,
			email,
			contactNumber,
			password: hashedPassword,
			accountType: accountType,
			approved: approved,
			additionalDetails: profileDetails._id,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
		});
		return res.status(200).json({
			success: true,
			user,
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
const login = async(req, res)=>{
    try{
        const {
            firstname, lastname,
            email, mobile, password, 
            stars, role, department, thana_id
        } = req.body;


        if(!firstname || !lastname || !email || !mobile || !password || !stars || !role || !department || !thana_id){
            return res.status(200).json({
                success: 400,
                message: "all fields are required"
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