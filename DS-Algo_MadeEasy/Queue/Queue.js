class Queue {
    constructor(capacity = 10) {
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity;
        this.data = [];
    }

    isQueueEmpty() {
        return this.front === -1 ? 1 : 0;
    }

    isQueueFull() {
        return this.rear + 1 === this.capacity ? 1 : 0;
    }

    queueSize() {
        return this.capacity - this.front + this.rear + 1
    }

    EnQuue(value) {
        if (this.isQueueFull() === 1) {
            return `Queue OverFlow`;
        } else {
            this.rear++;
            this.data[this.rear] = value;

            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    DeQueue() {
        let deleted;

        if (this.isQueueEmpty() === 1) {
            console.log(`Queue is Empty`);
            return 0;
        } else {
            deleted = this.data[this.front];
            if(this.front === this.rear){
                this.front = -1;
                this.rear = -1;
            } else {
                this.front++;
            }
        }
        return deletedl
    }

    deleteQueue() {
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity;
        this.data = [];
    }
    
}