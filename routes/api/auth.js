const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { authSchemas } = require("../../models/user");

// signup
router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

// signin
router.post(
  "/login",
  validateBody(authSchemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
