// // CommentForm.js
// import React, { useState } from "react";
// import { useCommentContext } from "../context/CommentContext";
// import { useAuth } from "../context/AuthContext";

// function CommentForm({ productId }) {
//   const { addComment } = useCommentContext();
//   const { user } = useAuth();
//   const [comment, setComment] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim() !== "") {
//       addComment({ productId, text: comment, author: user.username });
//       setComment("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="Ajouter un commentaire..."
//       />
//       <button type="submit">Publier</button>
//     </form>
//   );
// }

// export default CommentForm;
