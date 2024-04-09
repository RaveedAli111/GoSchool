const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../handlers/errorHandlers");
const {
  isValidToken,
  login,
  register,
  logout,
  activationController,
  forgetRequest,
  verifyOTP,
  resetPassword,
  deactivate,
} = require("../../controllers/root/authController");
router.route("/register").post(catchErrors(register));
router.route("/login").post(catchErrors(login));
router.route("/logout").post(isValidToken, catchErrors(logout));
router.route("/activation").post(catchErrors(activationController));
router.route("/forgetPassword").put(catchErrors(forgetRequest));
router.route("/resetPassword/:id").put(catchErrors(resetPassword));
router.route("/verifyOTP/:id").put(catchErrors(verifyOTP));
router.route("/deactivate/:id").delete(catchErrors(deactivate));
module.exports = router;
