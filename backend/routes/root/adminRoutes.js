const express = require("express");
const { catchErrors } = require("../../handlers/errorHandlers");
const mongoose = require("mongoose");
const Article = mongoose.model("Admin");

const router = express.Router();

const adminController = require("../../controllers/root/adminController");
const { createNotification } = require("../../controllers/Notifications");
//_______________________________ Admin management_______________________________

router.route("/create").post(catchErrors(adminController.create));
router.route("/read/:id").get(catchErrors(adminController.read));
router.route("/prolist").get(catchErrors(adminController.proData));

router
  .route("/check-username-availability")
  .get(catchErrors(adminController.checkUsernameAvailability));
router.route("/update/:id").patch(catchErrors(adminController.update));
router.route("/delete/:id").delete(catchErrors(adminController.delete));
router.route("/search").get(catchErrors(adminController.search));
router.route("/list").get(catchErrors(adminController.list));
router.route("/customlist").get(catchErrors(adminController.customList));
router
  .route("/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
router.route("/auth").get(catchErrors(adminController.accessAdmin));
router.get("/filterlist", function (req, res) {
  const page = req.query.page || 0;
  const type = req.query.type;
  const name = req.query.name;
  const limit = parseInt(req.query.items) || 12;
  const skip = page * limit - limit;

  let folderContactList = [];
  Article.find(function (err, contactList) {
    if (type === "folder") {
      if (name === "all") {
        folderContactList = contactList.filter((contact) => contact);
      } else {
        folderContactList = contactList;
      }
    } else {
      folderContactList = contactList.filter(
        (contact) => contact.process === name
      );
    }
    const index = page * 15;
    const total = folderContactList.length;
    const list =
      folderContactList.length > 15
        ? folderContactList.slice(index, index + 15)
        : folderContactList;

    res.json({ list, total });
  }).populate("power");
});

router.patch("/:id", async function (req, res) {
  try {
    let { email } = req.body;
    if (email) {
      const existingAdmin = await Article.findOne({ email: email });

      if (existingAdmin._id != req.params.id)
        return res
          .status(400)
          .json({ message: "An account with this email already exists." });
    }
    const article = Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, result) {
        if (err) {
          console.log(err);
        }
        console.log("RESULT: " + result);
        res.send({ result });
      }
    );
  } catch {
    // Server Error
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
});
router.patch("/follower/update/:id/:Id", async (req, res) => {
  try {
    const result = await Article.updateOne(
      { _id: req.params.id },
      {
        $push: {
          follower: req.body.follower,
        },
      }
    );
    
   
    // const findata = await Article.findOne({ _id: req.params.id });
    // if (result) {
    //   let data = {
    //     senderId: req.body.follower[0].user,
    //     receiverId: findata._id,
    //     message: "Follow Request",
    //   };
    //   createNotification(data);
    // }
    return res.status(200).json({
      success: true,
      result: result,
      message: "Following request submited ",
    });
  } catch {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
});
router.patch("/following/update/:id/:Id", async (req, res) => {
  try {
  
  
   const result=await Article.updateOne(
        { _id: req.params.Id },
        {
          $push: {
            following: req.body.following,
          },
        }
      );
    
    // const findata = await Article.findOne({ _id: req.params.id });
    // if (result) {
    //   let data = {
    //     senderId: req.body.follower[0].user,
    //     receiverId: findata._id,
    //     message: "Follow Request",
    //   };
    //   createNotification(data);
    // }
    return res.status(200).json({
      success: true,
      result: result,
      message: "Following request submited ",
    });
  } catch {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
});
// router.put("/acceptrequest/:id/:userId", async (req, res) => {
//   try {
//     await Article.updateOne(
//       { _id: req.params.id, "follower.user": req.params.userId },
//       {
//         $set: { "follower.$.status": req.body.status },
//       }
//     );
//     await Article.updateOne(
//       { _id: req.params.userId, "following.user": req.params.id },
//       {
//         $set: { "following.$.status": req.body.status },
//       }
//     );
//     const findata = await Article.findOne({ _id: req.params.id });
//     return res.status(200).json({
//       success: true,
//       result: findata,
//       message: "Following request accpet",
//     });
//   } catch {
//     return res.status(500).json({
//       success: false,
//       result: null,
// router.patch("/following/update/:id/:Id", async (req, res) => {
//   try {
//     const follower = req.body.follower;
//     const following = req.body.following;
//     if (!follower || !following) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid request body",
//       });
//     }
//     const updateResult = await Article.updateMany(
//       {
//         _id: {
//           $in: [req.params.id, req.params.Id],
//         },
//       },
//       {
//         $addToSet: {
//           follower: follower,
//           following: following,
//         },
//       }
//     );
//     if (updateResult.nModified !== 2) {
//       return res.status(500).json({
//         success: false,
//         message: "Failed to update following",
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       message: "Following updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "Oops there is an Error",
//     });
//   }
// });

router.put("/acceptrequest/:id/:userId", async (req, res) => {
  try {
    const { id, userId } = req.params;
    const { status } = req.body;

    await Article.updateMany(
      { _id: id, "follower.user": userId },
      { $set: { "follower.$[elem].status": status } },
      { arrayFilters: [{ "elem.user": userId }] }
    );

    await Article.updateMany(
      { _id: userId, "following.user": id },
      { $set: { "following.$[elem].status": status } },
      { arrayFilters: [{ "elem.user": id }] }
    );

    const updatedArticle = await Article.findOne(
      { _id: id },
      { title: 1, content: 1, follower: { $elemMatch: { user: userId } } }
    );

    return res.status(200).json({
      success: true,
      result: updatedArticle,
      message: "Following request accepted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Oops, there is an error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    // Find document by id and updates with the required fields
    const result = await Article.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true, // return the new result instead of the old one
        runValidators: true,
      }
    ).exec();

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
});
module.exports = router;
