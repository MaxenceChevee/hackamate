const LipstickManager = require("../models/LipstickManager");

const read = async (req, res) => {
  try {
    const { id } = req.params;
    const lipstickDetails = await new LipstickManager().read(id);
    res.status(200).json({ details: lipstickDetails });
  } catch (error) {
    console.error("Error fetching mascara details:", error);
    res.status(500).json({ message: "Error fetching mascara details", error });
  }
};
const readAll = async (req, res) => {
  try {
    const lipstickList = await new LipstickManager().readAll();
    res.status(200).json({ lipstick: lipstickList });
  } catch (error) {
    console.error("Error fetching all lipsticks:", error);
    res.status(500).json({ message: "Error fetching all lipsticks", error });
  }
};

const add = async (req, res) => {
  try {
    const { name, codeColor, nameColor, quantity, aspect, price } = req.body;
    const newLipstickId = await LipstickManager.create({
      name,
      codeColor,
      nameColor,
      quantity,
      aspect,
      price,
    });
    res
      .status(201)
      .json({ message: "Lipstick added successfully", id: newLipstickId });
  } catch (error) {
    console.error("Error adding lipstick:", error);
    res.status(500).json({ message: "Error adding lipstick", error });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const affectedRows = await LipstickManager.edit(id, updatedFields);
    if (affectedRows > 0) {
      res.status(200).json({ message: "Lipstick updated successfully" });
    } else {
      res.status(404).json({ message: "Lipstick not found" });
    }
  } catch (error) {
    console.error("Error updating lipstick:", error);
    res.status(500).json({ message: "Error updating lipstick", error });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await LipstickManager.destroy(id);
    res.status(200).json({ message: "Lipstick deleted successfully" });
  } catch (error) {
    console.error("Error deleting lipstick:", error);
    res.status(500).json({ message: "Error deleting lipstick", error });
  }
};

module.exports = {
  read,
  readAll,
  add,
  edit,
  destroy,
};
