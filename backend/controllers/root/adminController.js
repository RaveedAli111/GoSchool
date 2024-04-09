const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const Follow = mongoose.model("Follow");
const moment = require("moment");
/**
 *  Get all documents of a Model
 *  @param {Object} req.params
 *  @returns {Object} Results with pagination
 */

exports.accessAdmin = async (req, res) => {
  try {
    // const { ipAddress } = req.body;
    // console.log("IM OK", ipAddress, req.body);
    const admin = await Admin.findById(req.admin._id).select("-password");

    // if (admin.ipAddress.length > 0) {
    //   console.log("IM OK");
    //   const filterdata = admin.ipAddress.map((p) => p == ipAddress);
    //   console.log("hi", filterdata);
    //   if (!filterdata)
    //     return res.status(400).json({
    //       success: false,
    //       result: null,
    //       message: "You are not allowed to connect.",
    //     });
    // } else {
    res.status(200).json(admin);
    //}
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
exports.checkUsernameAvailability = async (req, res) => {
  const { username } = req.query;

  try {
    const userExists = await Admin.findOne({ userName: username });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Username already taken",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Username available",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occured while checking username availability",
    });
  }
};

exports.list = async (req, res) => {
  const page = req.query.page || 1;
  const limit = parseInt(req.query.items);
  const skip = page * limit - limit;
  try {
    //  Query the database for a list of all results
    const resultsPromise = Admin.find({ removed: false })
      .skip(skip)
      .limit(limit)
      .sort({ created: "desc" })
      .populate();
    // Counting the total documents
    const countPromise = Admin.count();
    // Resolving both promises
    const [result, count] = await Promise.all([resultsPromise, countPromise]);
    // Calculating total pages
    const pages = Math.ceil(count / limit);

    // Getting Pagination Object
    const pagination = { page, pages, count };
    if (count > 0) {
      for (let admin of result) {
        admin.password = undefined;
      }
      return res.status(200).json({
        success: true,
        result,
        pagination,
        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],
        pagination,
        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
};

exports.proData = async (req, res) => {
  const page = parseInt(req.query.current) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const skip = page * pageSize - pageSize;
  delete req.query.current;
  delete req.query.pageSize;
  let filter = {};
  if (req.query ) {
    for (const [key, value] of Object.entries(req.query)) {
      if (key === "createdat") {
        filter[key] = moment(value, "YYYY-MM-DD").format("YYYY-MM-DD");
      } else if (key === "startTime") {
        filter["createdAt"] = {
          $gte: moment(req.query.startTime, "YYYY-MM-DD").format("YYYY-MM-DD"),
          $lte: moment(req.query.endTime, "YYYY-MM-DD").format("YYYY-MM-DD"),
        };
      } else if (value === "true" || value === "false") {
        filter[key] = value;
      } else if (key === "createdBy") {
        filter[key] = new ObjectId(value);
      } else if (key === "keyword" && value !== "") {
        if (!isNaN(value)) {
          filter["$or"] = [{ id: Number(value) }];
        } else {
          filter["$or"] = [
            { name: { $regex: new RegExp(value, "i") } },
            { phone: { $regex: new RegExp(value, "i") } },
          ];
        }
      } else if (
        value !== "true" &&
        value !== "false" &&
        key !== "startTime" &&
        key !== "endTime" &&
        key !== "createdBy" &&
        value !== ""
      ) {
        if (!isNaN(value)) {
          filter[key] = Number(value);
        } else {
          filter[key] = { $regex: new RegExp(value, "i") };
        }
      }
    }
  }

  try {
    let data = await Admin.find(filter)
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);
    const Today = await Admin.countDocuments().where(
      "createdat",
      moment().format("YYYY-MM-DD")
    );
    const statuses = await Admin.distinct("status");
    const counts = await Promise.all(
      statuses.map((status) => Admin.countDocuments({ status }))
    );

    const statusCount = statuses.map((status, index) => {
      return {
        status: status,
        count: counts[index],
      };
    });
    const statusCountsWithToday = [
      { status: "All", count: 0 },
      { status: "Today", count: Today },
    ].concat(statusCount);
    const total = await Admin.countDocuments(filter);
    if (total > 0) {
      return res.status(200).json({
        success: true,
        data,
        page,
        total,
        statusCountsWithToday,
        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        data: [],
        page,
        statusCountsWithToday,
        total,
        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, data: [], message: "Oops there is an Error" });
  }
};

exports.customList = async (req, res) => {
  try {
    //  Query the database for a list of all results
    const resultsPromise = Admin.find(
      { removed: false },
      {
        address: 0,
        phone: 0,
        email: 0,
        password: 0,
        oldId: 0,
        birthAt: 0,
        joinedAt: 0,
        gender: 0,
        reportTo: 0,
        designation: 0,
        isFrequent: 0,
        isStarred: 0,
      }
    )

      .sort({ created: "desc" })
      .populate();
    // Counting the total documents
    const countPromise = Admin.count();
    // Resolving both promises
    const [result, count] = await Promise.all([resultsPromise, countPromise]);
    // Calculating total pages

    if (count > 0) {
      for (let admin of result) {
        admin.password = undefined;
      }
      return res.status(200).json({
        success: true,
        result,

        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],
        pagination,
        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
};

exports.profile = async (req, res) => {
  try {
    //  Query the database for a list of all results
    if (!req.admin) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "couldn't found  admin Profile ",
      });
    }
    let result = {
      _id: req.admin._id,
      enabled: req.admin.enabled,
      email: req.admin.email,
      name: req.admin.name,
      role: req.admin.role,
      process: req.admin.process,
      photo: req.admin.photo,
    };

    return res.status(200).json({
      success: true,
      result,
      message: "Successfully found Profile",
    });
  } catch {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
};

exports.read = async (req, res) => {
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
        follower: follow?.filter((f) => f.following?._id == req.params.id),
        following: follow?.filter((f) => f.follower?._id == req.params.id),
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
};

/**
 *  Creates a Single document by giving all necessary req.body fields
 *  @param {object} req.body
 *  @returns {string} Message
 */

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    let { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        success: false,
        result: null,
        message: "Email or password fields they don't have been entered.",
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

    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash(password);
    req.body.password = passwordHash;

    const result = await new Admin(req.body).save();
    if (!result) {
      return res.status(403).json({
        success: false,
        result: null,
        message: "document couldn't save correctly",
      });
    }
    return res.status(200).send({
      success: true,
      result: result,
      message: "Admin document save correctly",
    });
  } catch {
    return res.status(500).json({ success: false, message: "there is error" });
  }
};

/**
 *  Updates a Single document
 *  @param {object, string} (req.body, req.params.id)
 *  @returns {Document} Returns updated document
 */

exports.update = async (req, res) => {
  try {
    let { email } = req.body;
    const findAdmin = await Admin.findOne({ _id: req.params.id });
    let sameAdmin = findAdmin.email !== email;
    if (email && sameAdmin) {
      const existingAdmin = await Admin.findOne({ email: email });
      if (existingAdmin._id != req.params.id)
        return res
          .status(400)
          .json({ message: "An account with this email already exists." });
    }

    // Find document by id and updates with the required fields
    const result = await Admin.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true, // return the new result instead of the old one
      }
    ).exec();

    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found ",
      });
    }
    return res.status(200).json({
      success: true,
      result,
      message: "Update Successfully",
    });
  } catch {
    // Server Error
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    let { password } = req.body;

    if (!password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    if (password.length < 8)
      return res.status(400).json({
        msg: "The password needs to be at least 8 characters long.",
      });

    // if (password !== passwordCheck)
    //   return res
    //     .status(400)
    //     .json({ msg: "Enter the same password twice for verification." });
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
    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found by this id: " + req.params.id,
      });
    }
    return res.status(200).json({
      success: true,
      result: {
        _id: result._id,
        enabled: result.enabled,
        email: result.email,
        name: result.name,
        role: result.role,
        process: result.process,
      },
      message: "we update the password by this id: " + req.params.id,
    });
  } catch {
    // Server Error
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    let updates = {
      removed: true,
    };
    // Find the document by id and delete it
    const result = await Admin.findOneAndDelete({ _id: req.params.id }).exec();
    // If no results found, return document not found
    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found by this id: " + req.params.id,
      });
    } else {
      return res.status(200).json({
        success: true,
        result,
        message: "Successfully Deleted the document by id: " + req.params.id,
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

exports.search = async (req, res) => {
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
};
