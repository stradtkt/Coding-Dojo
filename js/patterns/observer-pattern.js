function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn}.name`);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are not unsubscribed from ${fn}.name`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}