const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongooseAutoIncrement = require("mongoose-auto-increment");
const FollowSchema = new mongoose.Schema({
  Id: { type: String },
  following: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    autopopulate: true,
  },
  follower: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    autopopulate: true,
  },

  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

FollowSchema.plugin(require("mongoose-autopopulate"));
mongooseAutoIncrement.initialize(mongoose.connection);
FollowSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "Follow",
  field: "Id",
  startAt: 1,
});
module.exports = mongoose.model("Follow", FollowSchema);
