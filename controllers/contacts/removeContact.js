const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  console.log(result);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};
module.exports = removeContact;
