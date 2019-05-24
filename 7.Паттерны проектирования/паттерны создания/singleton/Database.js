const firebase = require('firebase-admin');
const serviceAccount = require('/path/to/serviceAccountKey.json');

class App {
  constructor(appId) {
    this.appId = appId;
  }

  get database() {
    if (!this.db) {
      firebase.initalizeApp({
        credintial: firebase.credential.cert(serviceAccount),
        databaseURL: `https://${this.appId}.firebaseio.com`
      });

      this.db = firebase.database();
    }

    return this.db;
  }
}

let app = new App();

let db = app.database;