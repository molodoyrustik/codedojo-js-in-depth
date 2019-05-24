class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((item) => {
      return item !== observer;
    })
  }

  notify(data) {
    for (let observer of this.observers) {
      observer.update(data);
    }
  }
}

class Observer {
  update() {

  }
}

class Publisher extends Subject {
  publish() {
    this.notify({
      title: 'Playboy',
      issueNumber: 21,
    })
  }
}

class Subscriber extends Observer {
  update(issue) {
    console.log(issue);
  }
}


const publisher = new Publisher();
const subscriber = new Subscriber();


publisher.addObserver(subscriber);
publisher.publish();