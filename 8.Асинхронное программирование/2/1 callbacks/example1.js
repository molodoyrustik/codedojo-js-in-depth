const http = {
  get(url, done) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
      let data = JSON.parse(this.responseText);
      done(null, data);
    };

    xhr.onerror = function(error) {
      done(error);
    }

    xhr.open('GET', url);
    xhr.send();
  }
}

http.get('https://jsonplaceholder.typicode.com/todos', (error, data) => {
  if (error) throw error;
  console.log(data);
});