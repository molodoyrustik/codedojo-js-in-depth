function handleError(error) {
  console.log(error);
}

getUser(1)
  .then(user => getPosts(user.id),)
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(handleError);

// getUser(1)
//   .then(
//     user => {
//       getPosts(user.id)
//         .then(
//           posts => {
//             getComments(posts[0].id)
//               .then(
//                 comments => console.log(comments),
//                 handleError
//               )
//           },
//           handleError
//         )
//     },
//     handleError
//   )