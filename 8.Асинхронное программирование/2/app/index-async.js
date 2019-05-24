async function main() {
  try {
    let user = await getUser(1);
    let posts = await getPosts(user.id);
    let comments = await getComments(posts[0].id);
  
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

main(); 