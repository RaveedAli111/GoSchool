const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongooseAutoIncrement = require("mongoose-auto-increment");
const cardSchema = new mongoose.Schema(
  {
    Id: { type: String },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    certificationLink: [{ title: { type: String } }],
    middleName: {
      type: String,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    department: {
      type: String,
    },
    dob: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    designation: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    companyNumber: {
      type: String,
    },
    companyEmail: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    fax: {
      type: String,
    },
    officeHourStart: { type: Date },
    officeHourEnd: { type: Date },
    officeDays: [{ type: String }],
    heading: {
      type: String,
    },
    pronouns: {
      type: String,
    },
    preferred: {
      type: String,
    },

    cardTitle: {
      type: String,
    },
    maidenName: {
      type: String,
    },
    workExperience: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    degreeLevel: [
      {
        type: String,
      },
    ],
    accreditation: {
      type: String,
    },
    sharedWith: [{ type: ObjectId, ref: "Admin" }],
    contactShareWith: [
      {
        user: { type: ObjectId, ref: "Admin" },
        label: { type: String },
        number: { type: String },
        phoneCode: { type: String },
      },
    ],
    modifier: { type: String, default: "private" },
    primaryEmail: { type: String },
    secondaryEmail: { type: String },
    secondaryAddress: { type: String },
    social: [
      {
        title: { type: String },
        label: { type: String },
      },
    ],
    mobile: [
      {
        label: { type: String },
        number: { type: String },
        phoneCode: { type: String },
      },
    ],
    intro: { type: String },
    primaryAddress: { type: String },
    officeAddress: { type: String },
    occupation: { type: String },
    fatherOccupation: { type: String },
    maritalStatus: { type: String },
    numberOfChildren: { type: String },
    height: { type: String },
    weight: { type: String },
    religion: { type: String },
    caste: { type: String },
    sect: { type: String },
    ethnic: { type: String },
    contactDetail: { type: String },
    parentName: { type: String },
    parentEmail: { type: String },
    parentPhoneNumber: { type: String },
    parentPhoneCode: { type: String },
    prayers: { type: String },
    educationLevel: { type: String },
    thingsLikeToDo: [{ type: String }],
    badHabbit: [{ type: String }],
    specified: { type: String },
    specifiedBad: { type: String },
    gender: {
      type: String,
    },
    languages: { type: String },
    collegeDetail: [
      {
        collegeName: { type: String },
        collegeAddress: { type: String },
        collegeEmail: { type: String },
        degreeLevel: { type: String },
        degreeStart: { type: Date },
        degreeEnd: { type: Date },
      },
    ],
    projects: [
      {
        title: { type: String },
        label: { type: String },
        detail: { type: String },
        
      },
    ],
    achievements: [
      {
        title: { type: String },
        label: { type: String },
        detail: { type: String },
      },
    ],
    certification: [
      {
        title: { type: String },
        label: { type: String },
        detail: { type: String },
      },
    ],
    programmingLanguage: [
      {
        type: String,
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
    videoLink: [
      {
        link: { type: String },
        title: { type: String },
      },
    ],
    websiteLink: { type: String },
    video: [
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
    resume: [
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
    transcipt: [
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
    logo: [
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
    coverLetter: [
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
    createdBy: {
      type: ObjectId,
      ref: "Admin",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

mongooseAutoIncrement.initialize(mongoose.connection);
cardSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "Card",
  field: "Id",
  startAt: 1,
});
module.exports = mongoose.model("Card", cardSchema);
