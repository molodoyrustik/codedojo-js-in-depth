const http = {
  get(url) {
    let promise = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.onload = function() {
        let data = JSON.parse(this.responseText);
        resolve(data);
      };

      xhr.onerror = function(error) {
        reject(error);
      };
  
      xhr.open('GET', url);
      xhr.send();
    })

    return promise;
  }
}

http.get('https://jsonplaceholder.typicode.com/todos')
  .then(
    (data) => console.log(data),
    (error) => console.log(error)
  );