const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const NotificationSchema = new mongoose.Schema(
  {
    docId: {
      type: Number,
    },
    senderId: {
      type: ObjectId,
      ref: "Admin",
    },
    receiverId: {
      type: ObjectId,
      ref: "Admin",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
    },
    type: {
      type: String,
    },
    mode: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  { timestamps: true }
);

mongoose.model("Notification", NotificationSchema);
