// // controllers/commentController.js

// const CommentManager = require("../models/CommentManager");

// // The C of CRUD - Create operation
// const addComment = async (req, res) => {
//   try {
//     const { userId, productId, productType, commentText } = req.body;
//     const commentId = await CommentManager.create({
//       userId,
//       productId,
//       productType,
//       commentText,
//     });
//     const comment = await CommentManager.read(commentId);
//     res.status(201).json(comment);
//   } catch (error) {
//     console.error("Error adding comment:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // The R of CRUD - Read operation
// const getComments = async (req, res) => {
//     const { productType, productId } = req.params;
  
//     try {
//       const comments = await CommentManager.readByProduct(productType, productId);
//       res.json(comments);
//     } catch (error) {
//       console.error("Error getting comments:", error);
//     res
//       .status(500)
//       .json({ error: "Error getting comments", details: error.message });
//     }
//   };

// // The D of CRUD - Delete operation
// const deleteComment = async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     await CommentManager.delete(commentId);
//     res.sendStatus(204);
//   } catch (error) {
//     console.error("Error deleting comment:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = {
//   addComment,
//   getComments,
//   deleteComment,
// };
