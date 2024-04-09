const express = require("express");
const router = express.Router();
const send = require("../../controllers/root/sesEmailController");

router.route("/notification").post(send.SESemailNotification);
router.route("/ticket").post(send.SESemailTicket);
router.route("/feedback").post(send.SESemailFeedback);
router.route("/packages").post(send.SESemailPackages);
router.route("/extraService").post(send.SESemailExtraService);
router.route("/package").post(send.SESemailPackge);
router.route("/customPlan").post(send.SESemailCustomPlan);
router.route("/partner").post(send.SESemailPartner);
router.route("/freeTrail").post(send.SESemailFreeTrail);
router.route("/qoutation").post(send.SESemailQoutetion);
module.exports = router;
