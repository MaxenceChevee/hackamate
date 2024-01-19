const MascaraManager = require("../models/MascaraManager");

const read = async (req, res) => {
  try {
    const { id } = req.params;
    const mascaraDetails = await new MascaraManager().read(id);
    res.status(200).json({ details: mascaraDetails });
  } catch (error) {
    console.error("Error fetching mascara details:", error);
    res.status(500).json({ message: "Error fetching mascara details", error });
  }
};

const readAll = async (req, res) => {
  try {
    const mascaraList = await new MascaraManager().readAll();
    res.status(200).json({ mascaras: mascaraList });
  } catch (error) {
    console.error("Error fetching all mascaras:", error);
    res.status(500).json({ message: "Error fetching all mascaras", error });
  }
};

const add = async (req, res) => {
  try {
    const { name, codeColor, nameColor, quantity, effect, price } = req.body;
    const newMascaraId = await MascaraManager.create({
      name,
      codeColor,
      nameColor,
      quantity,
      effect,
      price,
    });
    res
      .status(201)
      .json({ message: "Mascara added successfully", id: newMascaraId });
  } catch (error) {
    console.error("Error adding mascara:", error);
    res.status(500).json({ message: "Error adding mascara", error });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const affectedRows = await MascaraManager.edit(id, updatedFields);
    if (affectedRows > 0) {
      res.status(200).json({ message: "Mascara updated successfully" });
    } else {
      res.status(404).json({ message: "Mascara not found" });
    }
  } catch (error) {
    console.error("Error updating mascara:", error);
    res.status(500).json({ message: "Error updating mascara", error });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await MascaraManager.delete(id);
    res.status(200).json({ message: "Mascara deleted successfully" });
  } catch (error) {
    console.error("Error deleting mascara:", error);
    res.status(500).json({ message: "Error deleting mascara", error });
  }
};

module.exports = {
  read,
  readAll,
  add,
  edit,
  destroy,
};
