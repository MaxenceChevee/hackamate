const FoundationManager = require("../models/FoundationManager");

const read = async (req, res) => {
  try {
    const { id } = req.params;
    const foundationDetails = await new FoundationManager().read(id);
    res.status(200).json({ details: foundationDetails });
  } catch (error) {
    console.error("Error fetching mascara details:", error);
    res.status(500).json({ message: "Error fetching mascara details", error });
  }
};
const readAll = async (req, res) => {
  try {
    const foundationList = await new FoundationManager().readAll();
    res.status(200).json({ foundation: foundationList });
  } catch (error) {
    console.error("Error fetching all foundations:", error);
    res.status(500).json({ message: "Error fetching all foundations", error });
  }
};

const add = async (req, res) => {
  try {
    const { name, codeColor, nameColor, quantity, aspect, price } = req.body;
    const newFoundationId = await FoundationManager.create({
      name,
      codeColor,
      nameColor,
      quantity,
      aspect,
      price,
    });
    res
      .status(201)
      .json({ message: "Foundation added successfully", id: newFoundationId });
  } catch (error) {
    console.error("Error adding foundation:", error);
    res.status(500).json({ message: "Error adding foundation", error });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const affectedRows = await FoundationManager.edit(id, updatedFields);
    if (affectedRows > 0) {
      res.status(200).json({ message: "Foundation updated successfully" });
    } else {
      res.status(404).json({ message: "Foundation not found" });
    }
  } catch (error) {
    console.error("Error updating foundation:", error);
    res.status(500).json({ message: "Error updating foundation", error });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await FoundationManager.destroy(id);
    res.status(200).json({ message: "Foundation deleted successfully" });
  } catch (error) {
    console.error("Error deleting foundation:", error);
    res.status(500).json({ message: "Error deleting foundation", error });
  }
};

module.exports = {
  read,
  readAll,
  add,
  edit,
  destroy,
};
