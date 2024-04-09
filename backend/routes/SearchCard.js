const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const Follow = mongoose.model("Follow");
router.get("/search", async (req, res) => {
  console.log(req.query);
  try {
    if (
      req.query.q === undefined ||
      req.query.q === "" ||
      req.query.q === " "
    ) {
      return res
        .status(202)
        .json({
          success: false,
          result: [],
          message: "No document found by this request",
        })
        .end();
    }

    const fieldsArray = req.query.fields.split(",");

    const fields = { $or: [] };

    for (const field of fieldsArray) {
      fields.$or.push({ [field]: { $regex: new RegExp(req.query.q, "i") } });
    }

    let result = await Admin.find(fields)
      .where("removed", false)
      .where("isCompeletProfile", true)
      .sort({ name: "asc" })
      .limit(10);

    if (result.length >= 1) {
      return res.status(200).json({
        success: true,
        result,
        message: "Successfully found all documents",
      });
    } else {
      return res.status(202).json({
        success: false,
        result: [],
        message: "No document found by this request",
      });
    }
  } catch {
    return res.status(500).json({
      success: false,
      result: [],
      message: "Oops there is an Error",
    });
  }
});

router.get("/read/:id", async (req, res) => {
  try {
    // Find document by id
    const tmpResult = await Admin.findOne({
      _id: req.params.id,
    });
    const follow = await Follow.find({
      $or: [{ following: req.params.id }, { follower: req.params.id }],
    });

    if (!tmpResult) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found by this id: " + req.params.id,
      });
    } else {
      const result = {
        ...tmpResult._doc,
        follower: follow?.filter((f) => f.following._id == req.params.id),
        following: follow?.filter((f) => f.follower._id == req.params.id),
      };

      return res.status(200).json({
        success: true,
        result,
        message: "we found this document by this id: " + req.params.id,
      });
    }
  } catch {
    // Server Error
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
});

router.get("/checkemail", async (req, res) => {
  if (req.query.q === undefined || req.query.q === "" || req.query.q === " ") {
    return res
      .status(202)
      .json({
        success: false,
        result: [],
        message: "No email found",
      })
      .end();
  }

  try {
    let results = await Admin.find({ email: req.query.q })
      .sort({ name: "asc" })
      .limit(1);

    if (results.length >= 1) {
      return res.status(200).json({
        success: true,
        result: results,
        message: "Successfully found Email",
      });
    } else {
      return res
        .status(202)
        .json({
          success: false,
          result: [],
          message: `No Email Found`,
        })
        .end();
    }
  } catch {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
});
module.exports = router;
