const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const Card = mongoose.model("Card");
const Follow = mongoose.model("Follow");
const Notification = mongoose.model("Notification");
require("dotenv").config({ path: ".env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.activationController = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({
        errors: "Expired link. Signup again",
      });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log("Activation error");
          return res.status(401).json({
            errors: "Expired link.. Signup again",
          });
        }
      });

      const { name, email, password, ipDetail } = jwt.decode(token);
      if (!email || !password)
        return res.status(400).json({
          success: false,
          message: "Not all fields have been entered.",
        });
      if (password.length < 5)
        return res.status(400).json({
          success: false,
          message: "The password needs to be at least 5 characters long.",
        });

      const existingAdmin = await Admin.findOne({ email: email });
      if (existingAdmin)
        return res.status(400).json({
          success: false,
          message: "An account with this email already exists.",
        });

      if (!name) name = email;

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const id = await Admin.findOne().sort({ _id: -1 }).limit(1);

      let x = id ? id.Id + 1 : 1;

      let z = name.slice(0, 2);
      let y = "@" + z + "00" + x;

      const newAdmin = new Admin({
        email,
        password: passwordHash,
        name,
        id: y,
        ipDetail,
      });
      const savedAdmin = await newAdmin.save();
      res.status(200).send({
        success: true,
        admin: savedAdmin,
        result: savedAdmin,
        message: "Successfully Signup",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      result: null,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });

    const admin = await Admin.findOne({ email: email });
    if (!admin)
      return res.status(400).json({
        success: false,
        result: null,
        message: "No account with this email has been registered.",
      });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        result: null,
        message: "Invalid credentials.",
      });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2400,
        id: admin._id,
      },
      process.env.JWT_SECRET
    );

    const result = await Admin.findOneAndUpdate(
      { _id: admin._id },
      { isLoggedIn: true },
      {
        new: true,
      }
    ).exec();

    res.json({
      success: true,
      result: {
        token,
        admin: {
          name: result.name,
          picture: result.picture,
          id: result.id,
          isLoggedIn: result.isLoggedIn,
          role: result.role,
          _id: result._id,
          isCompeletProfile: result.isCompeletProfile,
        },
      },
      message: "Successfully login",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, result: null, message: err.message });
  }
};

exports.isValidToken = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({
        success: false,
        result: null,
        message: "No authentication token, authorization denied.",
        jwtExpired: true,
      });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res.status(401).json({
        success: false,
        result: null,
        message: "Token verification failed, authorization denied.",
        jwtExpired: true,
      });

    const admin = await Admin.findOne({ _id: verified.id });
    if (!admin)
      return res.status(401).json({
        success: false,
        result: null,
        message: "Admin doens't Exist, authorization denied.",
        jwtExpired: true,
      });
    else {
      req.admin = admin;
      //    console.log(req.admin);
      next();
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      result: null,
      message: err.message,
      jwtExpired: true,
    });
  }
};

exports.logout = async (req, res) => {
  const result = await Admin.findOneAndUpdate(
    { _id: req.admin._id },
    { isLoggedIn: false },
    {
      new: true,
    }
  ).exec();

  res.status(200).json({ isLoggedIn: result.isLoggedIn });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, ipDetail } = req.body;

    if (!email || !password || !name)
      return res.status(400).json({
        success: false,
        result: null,
        message: "Email, Name or password fields they don't have been entered.",
      });
    const existingAdmin = await Admin.findOne({ email: email });

    if (existingAdmin)
      return res.status(400).json({
        success: false,
        result: null,
        message: "An account with this email already exists.",
      });

    if (password.length < 8)
      return res.status(400).json({
        success: false,
        result: null,
        message: "The password needs to be at least 8 characters long.",
      });
    const activation_token = jwt.sign(
      {
        name,
        email,
        password,
        ipDetail,
      },
      process.env.JWT_SECRET
    );

    const msg = {
      to: email,
      from: "info@fyndme.net",
      replyTo: "info@fyndme.net",
      subject: "Account activation link",
      text: `Account activation link`,
      html: `<h1>Hi ${name},</h1>
            <p>Thanks for getting started with us!</p>
            <p>We need a little more information to complete your registration, including a confirmation of your email address.</p>
            <h5>Please click this <a href="${process.env.BASE_URL}/activate/${activation_token}">link</a> to getting started with the process</h5>
            <p>Link not clickable?, copy and paste the following url in your address bar.</p>
            <p>${process.env.BASE_URL}/activate/${activation_token}</p>
            <P>If this was a mistake, just ignore this email and nothing will happen.</P>`,
    };

    await sgMail.send(msg);

    return res.status(200).send({
      success: true,
      result: ["true"],
      message:
        "An Email with account activation link sent, Please check you inbox to proceed further!",
    });
  } catch {
    return res.status(500).json({ success: false, message: "there is error" });
  }
};

exports.forgetRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const existingAdmin = await Admin.findOne({ email: email });
    function generateFourDigitNumber() {
      const min = 1000; // Minimum 4-digit number (inclusive)
      const max = 9999; // Maximum 4-digit number (inclusive)
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
    }
    if (!existingAdmin) {
      return res.status(404).json({
        success: true,
        result: null,
        message: "Not Found",
      });
    }
    const fourDigitCode = generateFourDigitNumber();
    const Token = fourDigitCode;
    const msg = {
      to: email,
      from: "info@fyndme.net",
      replyTo: "info@fyndme.net",
      subject: "Account Recovery",
      text: `Account Recovery`,
      html: `<h1 style={text-transform:capitalize}>Hi ${existingAdmin.name},</h1>
                <p>Your verification code is <b>${Token}.</b></p>   
                <p>Do not share it with anyone.</p>`,
    };

    await sgMail.send(msg);

    const result = await Admin.findOneAndUpdate(
      { _id: existingAdmin?._id },
      { otp: Token },
      {
        new: true, // return the new result instead of the old one
        runValidators: true,
      }
    ).exec();

    return res.status(200).json({
      success: true,
      result: { _id: result._id, email: result.email },
      message: "Email Sent Successfully",
    });
  } catch (err) {
    console.log(err);
    if (err.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        result: null,
        message: "Required fields are not supplied",
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: "Oops there is an Error",
      });
    }
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password } = req.body;

    const existingAdmin = await Admin.findById(req.params.id);
    if (!existingAdmin) {
      return res.status(404).json({
        success: true,
        result: null,
        message: "Not Found",
      });
    }
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash(password);
    let updates = {
      password: passwordHash,
    };

    // Find document by id and updates with the required fields
    const result = await Admin.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updates },
      {
        new: true, // return the new result instead of the old one
      }
    ).exec();

    return res.status(200).json({
      success: true,
      result: { _id: result._id, email: result.email },
      message: "Reset Password is Successfully",
    });
  } catch (err) {
    console.log(err);
    if (err.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        result: null,
        message: "Required fields are not supplied",
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: "Oops there is an Error",
      });
    }
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const existingAdmin = await Admin.findById(req.params.id);

    if (!existingAdmin) {
      return res.status(404).json({
        success: true,
        result: null,
        message: "User Not Found",
      });
    }
    const result = existingAdmin.otp == otp;
    if (!result) {
      return res.status(404).json({
        success: true,
        result: null,
        message: "OTP Not Matched",
      });
    }

    return res.status(200).json({
      success: true,
      result: { _id: existingAdmin._id, email: result.email, otp: otp },
      message: "OTP matched Successfully",
    });
  } catch (err) {
    console.log(err);
    if (err.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        result: null,
        message: "Required fields are not supplied",
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: "Oops there is an Error",
      });
    }
  }
};

exports.deactivate = async (req, res) => {
  try {
    const result = await Admin.findOneAndDelete({ _id: req.params.id }).exec();
    const cardDelete = await Card.findOneAndDelete({
      createdBy: req.params.id,
    }).exec();

    await Follow.findOneAndDelete({
      follower: req.params.id,
    }).exec();
    await Follow.findOneAndDelete({
      following: req.params.id,
    }).exec();
    await Notification.findOneAndDelete({
      receiverId: req.params.id,
    }).exec();

    console.log(result);
    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found by this id: ",
      });
    } else {
      return res.status(200).json({
        success: true,
        result,
        message: "Successfully Deleted the document by id: ",
      });
    }
  } catch {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
};

// exports.forgetRequest = async (req, res) => {
//   try {
//     console.log(req.body);
//     const { email } = req.body;
//     console.log(email);
//     if (!email)
//       return res.status(400).json({
//         success: false,
//         result: null,
//         message: "Email, fields they don't have been entered.",
//       });
//     const existingAdmin = await Admin.findOne({ email: email });

//     if (!existingAdmin)
//       return res.status(400).json({
//         success: false,
//         result: null,
//         message: "Invalid details.",
//       });
//     const Token = 3245;
//     let result = transporter.sendMail({
//       from: ` Fyndme <no-reply@metagrc.org>`, // sender address
//       to: email, // list of receivers
//       //   replyTo: `info@fyndme.net`, // Subject line
//       subject: "Account activation link",
//       text: `Account activation link`, // plain text body

//       html: `<h1>Hi ${existingAdmin.name},</h1>
//             <p>Thanks for getting started with us!</p>
//             <p>We need a little more information to complete your registration, including a confirmation of your email address.</p>
//             <p>${Token}</p>
//             <P>If this was a mistake, just ignore this email and nothing will happen.</P>`,
//     });

//     const saved = await Admin.findOneAndUpdate(
//       { _id: req.admin._id },
//       { resetToken: Token }
//     ).exec();

//     return res.status(200).send({
//       success: true,
//       result,
//       message:
//         "An Email with account activation link sent, Please check you inbox to proceed further!",
//     });
//   } catch {
//     return res.status(500).json({ success: false, message: "there is error" });
//   }
// };
