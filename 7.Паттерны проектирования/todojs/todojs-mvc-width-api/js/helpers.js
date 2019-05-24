function save(data) {
  const string = JSON.stringify(data);

  localStorage.setItem('todos', string);
}

function load() {
  const string = localStorage.getItem('todos');
  const data = JSON.parse(string);

  return data;
}

function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => {
      if (key.startsWith('data-')) {
          element.setAttribute(key, props[key]);
      } else {
          element[key] = props[key];
      }
  });

  children.forEach(child => {
      if (typeof child === 'string') {
          child = document.createTextNode(child);
      }

      element.appendChild(child);
  });

  return element;
}

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

class DbService {
  constructor(url) {
    this.url = url;
  }

  get() {
    return axios.get(this.url);
  }

  add(data) {
    return axios.post(this.url, data);
  }

  update(id, data) {
    return axios.put(this.url, { id, data});
  }

  remove(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}