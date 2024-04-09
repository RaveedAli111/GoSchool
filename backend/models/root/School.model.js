const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongooseAutoIncrement = require("mongoose-auto-increment");
const schoolSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
    },
    schoolType: {
      type: String,
    },
    society: {
      type: String,
    },
    plotNo: {
      type: String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    gradeEnd: {
      type: String,
    },
    academicYearStart: {
      type: Date,
    },
    academicYearEnd: {
      type: Date,
    },
    phoneNumber: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    email: {
      type: String,
    },
    userName: {
      type: String,
    },

    confirmPassword: {
      type: String,
    },
    adress: {
      type: String,
    },
    gradeStart: {
      type: String,
    },
    board: {
      type: String,
    },
    password: {
      type: String,
    },
    checkBox: {
      type: Boolean,
    },

    designation: {
      type: String,
    },
    contactPersonName: {
      type: String,
    },
    admissionProcess: {
      type: Boolean,
    },
    docTextArea: {
      type: String,
    },
    langInstructions: {
      type: String,
    },
    maximumFee: {
      type: Number,
    },
    minimumFee: {
      type: Number,
    },
    schoolStatus: {
      type: String,
    },
    schoolType: {
      type: String,
    },
    siblingDiscounts: {
      type: Boolean,
    },
    yearOfEstablishment: {
      type: Number,
    },
    lastDateOfAdmission: {
      type: Date,
    },
    transportation: {
      type: Boolean,
    },

    pictures: [
      {
        name: { type: String },
        thumbUrl: { type: String },
        url: { type: String },
        uid: { type: String },
        lastModified: { type: Number },
        lastModifiedDate: { type: String },
        name: { type: String },
        size: { type: Number },
        type: { type: String },
        status: { type: String },
      },
    ],

    // addvance facilities model

    acClassroom: {
      type: Boolean,
    },
    multimediaClassroom: {
      type: Boolean,
    },
    wifiClassroom: {
      type: Boolean,
    },
    dayCare: {
      type: Boolean,
    },
    medicalRoom: {
      type: Boolean,
    },
    alumniAssociation: {
      type: Boolean,
    },
    backupGenrators: {
      type: Boolean,
    },
    artAndCraft: {
      type: Boolean,
    },
    dance: {
      type: Boolean,
    },
    debate: {
      type: Boolean,
    },
    drama: {
      type: Boolean,
    },
    music: {
      type: Boolean,
    },
    picnicksAndExcursion: {
      type: Boolean,
    },
    horseRiding: {
      type: Boolean,
    },
    skating: {
      type: Boolean,
    },
    indoorSports: {
      type: Boolean,
    },
    outdoorSports: {
      type: Boolean,
    },
    swimmingPool: {
      type: Boolean,
    },
    karate: {
      type: Boolean,
    },
    yoga: {
      type: Boolean,
    },
    purposeBuiltBuilding: {
      type: Boolean,
    },
    library: {
      type: Boolean,
    },
    auditorium: {
      type: Boolean,
    },
    cafeteria: {
      type: Boolean,
    },
    playground: {
      type: Boolean,
    },
    cameras: {
      type: Boolean,
    },
    gpsBusTrackingApp: {
      type: Boolean,
    },
    studentTrackingApp: {
      type: Boolean,
    },
    ramps: {
      type: Boolean,
    },
    elevator: {
      type: Boolean,
    },
    washrooms: {
      type: Boolean,
    },
    araibic: {
      type: Boolean,
    },
    german: {
      type: Boolean,
    },
    spanish: {
      type: Boolean,
    },
    chinese: {
      type: Boolean,
    },
    boysHostel: {
      type: Boolean,
    },

    girlsHostel: {
      type: Boolean,
    },
    termsAndCondition: {
      type: Boolean,
    },
    scienceLab: {
      type: Boolean,
    },
    computerLab: {
      type: Boolean,
    },
    roboticsLab: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  }
);

mongooseAutoIncrement.initialize(mongoose.connection);
schoolSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "School",
  field: "Id",
  startAt: 1,
});
module.exports = mongoose.model("School", schoolSchema);
