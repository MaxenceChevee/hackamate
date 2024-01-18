const AbstractManager = require("./AbstractManager");

class ShoppingCartManager extends AbstractManager {
  constructor() {
    super({ table: "shopping_cart" });
  }

  async create({ userId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id) VALUES (?)`,
      [userId]
    );

    return result.insertId;
  }

  async getByUserId(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );

    if (rows.length === 0) {
      return [];
    }

    return rows[0];
  }

  async addItem(cartId, itemId, itemType, quantity) {
    const [result] = await this.database.query(
      `INSERT INTO cart_items (cart_id, item_id, item_type, quantity) VALUES (?, ?, ?, ?)`,
      [cartId, itemId, itemType, quantity]
    );

    return result.insertId;
  }

  async removeItem(cartId, itemId) {
    await this.database.query(
      `DELETE FROM cart_items WHERE cart_id = ? AND item_id = ?`,
      [cartId, itemId]
    );
  }

  async getCartItems(cartId) {
    const [rows] = await this.database.query(
      `SELECT * FROM cart_items WHERE cart_id = ?`,
      [cartId]
    );

    return rows;
  }

  async updateItemQuantity(cartId, itemId, quantity) {
    await this.database.query(
      `UPDATE cart_items SET quantity = ? WHERE cart_id = ? AND item_id = ?`,
      [quantity, cartId, itemId]
    );
  }

  async clearCart(cartId) {
    await this.database.query(`DELETE FROM cart_items WHERE cart_id = ?`, [
      cartId,
    ]);
  }
}

module.exports = ShoppingCartManager;
