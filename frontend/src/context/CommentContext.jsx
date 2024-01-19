// import React, { createContext, useContext, useState } from "react";

// const CommentContext = createContext();

// export const useCommentContext = () => {
//   return useContext(CommentContext);
// };

// export function CommentProvider({ children }) {
//   const [comments, setComments] = useState([]);

//   const addComment = (comment) => {
//     setComments([...comments, comment]);
//   };

//   return (
//     <CommentContext.Provider value={{ comments, addComment }}>
//       {children}
//     </CommentContext.Provider>
//   );
// }
