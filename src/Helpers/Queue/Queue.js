class Queue {
  constructor() {
    this.QueueArray = [];
  }
  Enqueue(data) {
    this.QueueArray.push(data);
  }
  SortedEnqueue(data) {
    var contain = false;

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for (var i = 0; i < this.QueueArray.length; i++) {
      if (this.QueueArray[i].executionCount > data.executionCount) {
        // Once the correct location is found it is
        // enqueued
        this.QueueArray.splice(i, 0, data);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) {
      this.QueueArray.push(data);
    }
  }
  Dequeue() {
    return this.QueueArray.shift();
  }
  Peek() {
    return this.QueueArray[this.QueueArray.length - 1];
  }
  Front(){
    return this.QueueArray[0];
  }
  GetAll() {
    return [...this.QueueArray]
  }
  Count() {
    return this.QueueArray.length;
  }
}
export default Queue;
