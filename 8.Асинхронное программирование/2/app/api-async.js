const API_URL = 'https://jsonplaceholder.typicode.com';

async function getUser(id) {
  let response = await fetch(`${API_URL}/users/${id}`);
  let user = await response.json();
  return user;
}

async function getPosts(userId) {
  let posts = await http.get(`${API_URL}/todos?userId=${userId}`);
  return posts
}

async function getComments(postId) {
  let comments = await http.get(`${API_URL}/comments?postId=${postId}`);
  return comments
}