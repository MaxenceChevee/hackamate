const AbstractManager = require("./AbstractManager");

class LipstickManager extends AbstractManager {
  constructor() {
    super({ table: "lipstick" });
  }

  async create(lipstick) {
    const { codeColor, nameColor, weight, aspect, price } = lipstick;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (code_color, name_color, weight, aspect, price) VALUES (?, ?, ?, ?, ?)`,
      [codeColor, nameColor, weight, aspect, price]
    );

    return result.insertId;
  }

  async read(id, field) {
    if (field) {
      const [rows] = await this.database.query(
        `SELECT ?? FROM ${this.table} WHERE id = ?`,
        [field, id]
      );

      if (rows.length === 0) {
        return null;
      }

      return rows[0][field];
    }

    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async edit(id, updatedFields) {
    const allowedFields = [
      "codeColor",
      "nameColor",
      "weight",
      "aspect",
      "price",
    ];

    const fieldsToUpdate = Object.keys(updatedFields).filter((field) =>
      allowedFields.includes(field)
    );

    const updateValues = fieldsToUpdate.map((field) => updatedFields[field]);

    if (fieldsToUpdate.length === 0) {
      return 0;
    }

    const updateQuery = `UPDATE ${this.table} SET ${fieldsToUpdate
      .map((field) => `${field} = ?`)
      .join(", ")} WHERE id = ?`;

    updateValues.push(id);

    const [result] = await this.database.query(updateQuery, updateValues);

    return result.affectedRows;
  }

  async delete(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = LipstickManager;
