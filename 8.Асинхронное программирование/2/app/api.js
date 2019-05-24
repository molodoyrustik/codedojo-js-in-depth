const API_URL = 'https://jsonplaceholder.typicode.com';

function getUser(id) {
  return http.get(`${API_URL}/users/${id}`);
}

function getPosts(userId) {
  return http.get(`${API_URL}/todos?userId=${userId}`);
}

function getComments(postId) {
  return http.get(`${API_URL}/comments?postId=${postId}`);
}