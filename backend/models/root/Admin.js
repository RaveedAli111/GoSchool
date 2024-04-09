const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcryptjs");
const mongooseAutoIncrement = require("mongoose-auto-increment");
const moment = require("moment");
const adminSchema = new Schema(
  {
    id: { type: String },
    removed: {
      type: Boolean,
      default: false,
    },
    phoneCode: { type: String },
    mobileCover: [
      {
        url: { type: String },
        name: { type: String },
        size: { type: Number },
        lastModifiedDate: { type: String },
        type: { type: String },
        uid: { type: String },
        status: { type: String },
        thumbUrl: { type: String },
        path: { type: String },
      },
    ],
    country: { type: String },
    address: { type: String },
    dob: { type: String },
    number: { type: String },
    otp: { type: Number },
    userName: { type: String },
    ipDetail: {
      IPv4: { type: String },
      country_code: { type: String },
      country_name: { type: String },
      city: { type: String },
      latitude: { type: String },
      longitude: { type: String },
      postal: { type: String },
      state: { type: String },
    },

    enabled: {
      type: Boolean,
      default: true,
    },

    isCompeletProfile: {
      type: Boolean,
      default: false,
    },
    name: { type: String },
    isAdmin: { type: Boolean, default: false },

    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: { type: String, required: true },

    role: { type: String, default: "user" },
    description: { type: String },
    cover: [
      {
        url: { type: String },
        name: { type: String },
        size: { type: Number },
        lastModifiedDate: { type: String },
        type: { type: String },
        uid: { type: String },
        status: { type: String },
        thumbUrl: { type: String },
        path: { type: String },
      },
    ],
    picture: [
      {
        url: { type: String },
        name: { type: String },
        size: { type: Number },
        lastModifiedDate: { type: String },
        type: { type: String },
        uid: { type: String },
        status: { type: String },
        thumbUrl: { type: String },
        path: { type: String },
      },
    ],
    tag: { type: String },
    root: { type: Boolean, default: false },
    createdat: { type: String, default: moment().format("YYYY-MM-DD") },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isLoggedIn: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
adminSchema.plugin(require("mongoose-autopopulate"));
mongooseAutoIncrement.initialize(mongoose.connection);
adminSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "Admin",
  field: "Id",
  startAt: 1,
});
// generating a hash
adminSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
adminSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Admin", adminSchema);
