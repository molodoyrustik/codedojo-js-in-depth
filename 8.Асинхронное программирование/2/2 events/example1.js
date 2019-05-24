class EventEmitter {
  constructor () {
    this.events = {};
  };

  on(type, callback) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
  }

  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach(callback => callback(arg));
    }
  }

}

const http = {
  get(url) {
    let xhr = new XMLHttpRequest();
    let eventEmitter = new EventEmitter();

    xhr.onload = function() {
      let data = JSON.parse(this.responseText);
      eventEmitter.emit('done', data);
    };

    xhr.onerror = function(error) {
      eventEmitter.emit('error', error);
    }

    xhr.open('GET', url);
    xhr.send();
    return eventEmitter;
  }
}

let request = http.get('https://jsonplaceholder.typicode.com/todos');

request.on('done', data => console.log(data));
request.on('error', error => console.error(error));