const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
