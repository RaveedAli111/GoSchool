const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Article = mongoose.model("Notification");

router.get("/list", async (req, res) => {
  let { all, f1, f2, f3 } = req.query;

  let query = {};
  if (f1) query.isRead = f1;
  if (f2) query.receiverId = f2;
  if (f3) query.senderId = f3;
  try {
    const result = await Article.find(all == "all" ? {} : query)
      .populate("senderId receiverId")
      .sort({ createdAt: -1 });
    const count = await Article.countDocuments()
      .where("isRead", false)
      .where("receiverId", f2);
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        result,
        count,
        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],
        count: 0,
        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
});
router.get("/list-all", function (req, res) {
  Article.find(function (err, articles) {
    res.json(articles);
  }).populate("senderId receiverId");
});

router.post("/", function (req, res) {
  let article = new Article(req.body);
  article.save(function (err, book) {
    book.populate("receiverId senderId ", function (err, book) {
      res.json(book);
    });
  });
});
router.post("/adminNotification", async function (req, res) {
  try {
    const result = await new Article(req.body).save();

    // Returning successfull response
    return res.status(200).json({
      success: true,
      result,
      message: "Successfully Send",
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

router.put("/:id", function (req, res) {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Article updated");
    })
    .catch(function (err) {
      res.status(422).send("Article update failed.");
    });
});
router.patch("/:id", function (req, res) {
  const article = Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT: " + result);
      res.send(result);
    }
  ).populate("senderId receiverId");
});

router.delete("/:id", function (req, res) {
  Article.findById(req.params.id, function (err, article) {
    if (!article) {
      res.status(404).send("Article not found");
    } else {
      Article.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json("Article deleted");
        })
        .catch(function (err) {
          res.status(400).send("Article delete failed.");
        });
    }
  });
});
router.put("/update/single/:id", async (req, res) => {
  let data = { isRead: true };
  try {
    const result = await Article.findOneAndUpdate(
      { _id: req.params.id },
      data,
      {
        new: true, // return the new result instead of the old one
        runValidators: true,
      }
    ).exec();

    return res.status(200).json({
      success: true,
      result,
      message: "we update this document by this id: " + req.params.id,
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
router.put("/update/many/:id", async (req, res) => {
  let data = { isRead: true };
  try {
    const result = await Article.updateMany(
      { receiverId: req.params.id },
      data,
      {
        new: true, // return the new result instead of the old one
        runValidators: true,
      }
    ).exec();

    return res.status(200).json({
      success: true,
      result,
      message: "we update this document by this id: " + req.params.id,
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
