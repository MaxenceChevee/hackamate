// const AbstractManager = require("./AbstractManager");

// class CommentManager extends AbstractManager {
//   constructor() {
//     super({ table: "comments" });
//   }

//   // The C of CRUD - Create operation
//   async create(comment) {
//     try {
//       const { userId, productId, productType, commentText } = comment;

//       const [result] = await this.database.query(
//         `INSERT INTO ${this.table} (userId, productId, productType, commentText) VALUES (?, ?, ?, ?)`,
//         [userId, productId, productType, commentText]
//       );

//       return result.insertId;
//     } catch (error) {
//       console.error("Error creating comment:", error);
//       throw error;
//     }
//   }

//   // The Rs of CRUD - Read operations
//   async readByProduct(productType, productId) {
//     try {
//       const [rows] = await this.database.query(
//         `SELECT * FROM ${this.table} WHERE productType = ? AND productId = ?`,
//         [productType, productId]
//       );

//       return rows;
//     } catch (error) {
//       console.error("Error reading comments by product:", error);
//       throw error;
//     }
//   }


//   async readAllComments() {
//     try {
//       const [rows] = await this.readAll(); // Utiliser la méthode existante readAll
//       return rows;
//     } catch (error) {
//       console.error("Error inside readAllComments:", error);
//       throw error;
//     }
//   }
  
  
//   // The U of CRUD - Update operation
//   async edit(id, updatedFields) {
//     const allowedFields = ["userId", "productId", "productType", "commentText"];

//     const fieldsToUpdate = Object.keys(updatedFields).filter((field) =>
//       allowedFields.includes(field)
//     );

//     const updateValues = fieldsToUpdate.map((field) => updatedFields[field]);

//     if (fieldsToUpdate.length === 0) {
//       return 0;
//     }

//     const updateQuery = `UPDATE ${this.table} SET ${fieldsToUpdate
//       .map((field) => `${field} = ?`)
//       .join(", ")} WHERE id = ?`;

//     updateValues.push(id);

//     const [result] = await this.database.query(updateQuery, updateValues);

//     return result.affectedRows;
//   }

//   // The D of CRUD - Delete operation
//   async delete(id) {
//     await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
//   }
// }

// module.exports = CommentManager;
