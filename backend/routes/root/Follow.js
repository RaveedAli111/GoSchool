const express = require("express");
const { catchErrors } = require("../../handlers/errorHandlers");
const router = express.Router();
const mongoose = require("mongoose");
const Model = mongoose.model("Follow");
const Notification = mongoose.model("Notification");
const follow = require("../../controllers/root/Follow");
const { createNotification } = require("../../controllers/Notifications");
// router.route("/create").post(catchErrors(follow.create));
router.route("/read/:id").get(catchErrors(follow.read));
router.route("/update/:id").put(catchErrors(follow.update));
router.route("/delete/:id").delete(catchErrors(follow.delete));
router.route("/search").get(catchErrors(follow.search));
router.route("/list").get(catchErrors(follow.list));
router.post("/create", async (req, res) => {
  try {


    const result = await new Model(req.body).save();

    if (result) {
      let data = {
        senderId: req.body.follower,
        receiverId: req.body.following,
        message: "Follow Request",
      };
      createNotification(data);
    }
    return res.status(200).json({
      success: true,
      result,
      message: "Successfully Created",
    });
  } catch (err) {
    // If err is thrown by Mongoose due to required validations
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
})
router.get("/read/all/:id", async (req, res) => {
  try {
    const resultsPromise = Model.find({ follower: req.params.id });
    console.log(res)
    const [result] = await Promise.all([resultsPromise]);
    if (result?.length > 0) {
      return res.status(200).json({
        success: true,
        result,

        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],

        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
});
router.get("/read/following/:id", async (req, res) => {
  try {
    const resultsPromise = Model.find({ following: req.params.id });
   
    const [result] = await Promise.all([resultsPromise]);
    if (result?.length > 0) {
      return res.status(200).json({
        success: true,
        result,

        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],

        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
});
router.get("/read/follower/:id", async (req, res) => {
  try {
    const resultsPromise = Model.find({ follower: req.params.id });
   
    const [result] = await Promise.all([resultsPromise]);
    if (result?.length > 0) {
      return res.status(200).json({
        success: true,
        result,

        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],

        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
});
router.put("/accept/:id", async (req, res) => {
  console.log(req.body.status)
  try {
    // Find document by id and updates with the required fields
    const result = await Model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true, // return the new result instead of the old one
        runValidators: true,
      }
    ).exec();
    let data = {
      senderId: result.following._id,
      receiverId: result.follower._id,
      message: `Follow Request ${req.body.status == true ? "Accepted" : "Rejected"}`,
    };
    createNotification(data);

    return res.status(200).json({
      success: true,
      result,
      message: "Update Successfully",
    });
  } catch (err) {
    // If err is thrown by Mongoose due to required validations
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
})
module.exports = router;