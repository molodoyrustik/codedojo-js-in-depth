var PubSub = {
  subscribe: function(ev, callback) {
      var calls = this._callbacks || (this._callbacks = {});

      (this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
      return this;
  },

  publish: function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var ev = args.shift();

      var list , calls, i, l;
      if(!(calls = this._callbacks)) return this;
      if(!(list = this._callbacks[ev])) return this;

      for ( i = 0, l = list.length; i< l; i++) {
          list[i].apply(this, args);
      }
      return this;
  }
};

// subscribe 1
PubSub.subscribe('wem', function(options){
  console.log(options)
});

// subscribe 2
PubSub.subscribe('wem', function(options){
  console.log(options)
});

// publisher
PubSub.publish('wem', {name: 'Ruslan', age: 17});