const LinkedList = function() {
    this.length = 0;
    this.first = null;
    this.last = null;
}

LinkedList.Node = function(data){
    this.prev = null;
    this.next = null;
    this.data = data;
}

LinkedList.prototype.append = function(node) {
    if (this.first === null) {
        node.prev = node;
        node.next = node;
        this.first = node;
        this.last = node;
    } else {
        node.prev = this.last;
        node.next = this.first;
        this.first.prev = node;
        this.last.next = node;
        this.last = node;
    }
    this.length++;
}

LinkedList.prototype.insertAfter = function (node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;

    if (newNode.prev == this.last) {
        this.last = newNode;
    }

    this.length++;
}

LinkedList.prototype.remove = function (node) {
    if (this.length > 1) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        if (node == this.first) {
            this.first = node.next;
        }
        if (node == this.last) {
            this.last = node.prev;
        }
    } else {
        this.first = null;
        this.last = null;
    }
    node.prev = null;
    node.next = null;
    this.length--;
}

LinkedList.prototype.each = function (cb) {
    var p = this.first
    var n = this.length

    while (n--) {
        cb(p.data)
        p = p.next
    }
}

let myList = new LinkedList();
myList.append(new LinkedList.Node(1));
myList.append(new LinkedList.Node(2));
myList.append(new LinkedList.Node(3));
myList.append(new LinkedList.Node(4));
myList.append(new LinkedList.Node(5));
myList.append(new LinkedList.Node(6));
console.log(myList);
