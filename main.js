class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.link) {
        current = current.link;
      }
      current.link = new Node(value);
    }
  }

  prepend(value) {
    let prep = new Node(value);
    prep.link = this.head;
    this.head = prep;
  }

  size() {
    let total = 0;
    let current = this.head;
    while (current) {
      total++;
      current = current.link;
    }
    return total;
  }

  toString() {
    let returned = "";
    let current = this.head;
    while (current) {
      returned = returned + " " + current.value;
      current = current.link;
    }
    return returned;
  }

  headOut() {
    return this.head.value;
  }

  tailOut() {
    let current = this.head;
    while (current.link) {
      current = current.link;
    }
    return current.value;
  }

  at(index) {
    if (index >= this.size()) {
      return "null";
    }
    let start = 0;
    let current = this.head;
    while (start < index) {
      current = current.link;
      start++;
    }
    return current.value;
  }

  pop() {
    let current = this.head;
    while (current.link.link) {
      current = current.link;
    }
    current.link = null;
  }

  contains(value) {
    let current = this.head;
    while (current.link) {
      if (current.value == value) {
        return true;
      }
      current = current.link;
    }
    if (current.value == value) {
      return true;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current.link) {
      if (current.value == value) {
        return index;
      }
      current = current.link;
      index++;
    }
    if (current.value == value) {
      return index;
    }
    return null;
  }

  insertAt(index, value) {
    if (index >= this.size()) {
      return;
    }
    let to = index - 1;
    let now = 0;
    let current = this.head;
    while (now < to) {
      current = current.link;
      now++;
    }
    let add = new Node(value);
    add.link = current.link;
    current.link = add;
  }

  removeAt(index) {
    if (index == 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    let now = 0;
    if (index >= this.size()) {
      return;
    }
    while (now < index) {
      current = current.link;
      now++;
    }
    let fix = index - 1;
    let now2 = 0;
    let current2 = this.head;
    while (now2 < fix) {
      current2 = current2.link;
      now2++;
    }
    current2.link = current.link;
  }
}
