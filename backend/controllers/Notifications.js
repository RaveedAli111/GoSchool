const mongoose = require('mongoose');
const Model = mongoose.model('Notification');
exports.createNotification = async (data) => {
  try {
    const result = await new Model(data).save();
   
  } catch (err) {
    console.log(err)
  }
};
