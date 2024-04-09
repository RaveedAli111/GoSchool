const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");
const router = express.Router();
const mongoose = require("mongoose");
const Model = mongoose.model("Card");
const Notification = mongoose.model("Notification");
const card = require("../controllers/Card");
const Admin = mongoose.model("Admin");

router.route("/create").post(catchErrors(card.create));
router.route("/read/:id").get(catchErrors(card.read));
router.route("/update/:id").put(catchErrors(card.update));
router.route("/delete/:id").delete(catchErrors(card.delete));
router.route("/search").get(catchErrors(card.search));
router.route("/list").get(catchErrors(card.list));

router.get("/listbyuser/:id", async (req, res) => {
  try {
    const resultsPromise = Model.find({ createdBy: req.params.id });
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

router.get("/alllist", async (req, res) => {
  const limit = 20;

  try {
    const resultsPromise = Admin.find()
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate();

    const [results] = await Promise.all([resultsPromise]);
    const resultss = results?.map(
      (p) => p.picture?.length > 0 && p.picture[0]?.url
    );
    const result = resultss.filter((p) => p !== false);
    if (result.length > 0) {
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

router.put("/add/following/:id/:Id/:followId", async (req, res) => {
  const result = await Model.findOneAndUpdate(
    { _id: req.params.id },
    { $push: req.body },
    {
      new: true,
      runValidators: true,
    }
  ).exec();

  if (result) {
    // const data = { status: true };
    // const updateResult = await Admin.updateOne(
    //   { _id: req.params.Id, "following._id": req.params.followId },
    //   { $set: { "following.$": data } }
    // );

    // if (updateResult.nModified > 0) {
    return res.status(200).json({
      success: true,
      result,
      message: "we update this document by this id: " + req.params.id,
    });
  }

  // }

  // Server Error
  return res.status(500).json({
    success: false,
    result: null,
    message: "Oops there is an Error",
  });
});

router.put("/remove/following/:id", async (req, res) => {
  await Model.updateOne(
    { _id: req.params.id },
    {
      $pull: {
        sharedWith: req.body.sharedWith,
      },
    },

    { new: true },
    async (err, result) => {
      if (err) {
        return res.status(422).json({ error: " canot post" });
      }
      try {
        let newResult = await Model.findByIdAndUpdate(req.params.id);

        return res.status(200).json({
          success: true,
          result: newResult,
          message: "Premission removed",
        });
      } catch (error) {
        console.log(error);
      }
      // res.send(result);
    }
  );
});

router.put("/remove/following/mobile/:id/:sharedId", async (req, res) => {
  await Model.updateOne(
    { _id: req.params.id },
    {
      $pull: { contactShareWith: { _id: req.body.contactShareWith } },
    },

    { new: true },
    async (err, result) => {
      if (err) {
        return res.status(422).json({ error: " canot post" });
      }
      try {
        let newResult = await Model.findByIdAndUpdate(req.params.id);

        return res.status(200).json({
          success: true,
          result: newResult,
          message: "Premission removed",
        });
      } catch (error) {
        console.log(error);
      }
      // res.send(result);
    }
  );
});

module.exports = router;
