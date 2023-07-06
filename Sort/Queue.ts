type QNode<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // tail
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        // check if it's empty
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // add a new tail to the list
        this.tail.next = node;

        // points tail to the last item of the list
        this.tail = node;
    }

    // head
    deque(): T | undefined {

        // checks for head
        if (!this.head) {
            return undefined;
        }

        // keeps track of length
        this.length--;

        // updates head to point to the next value
        const head = this.head;
        this.head = this.head.next;

        // free memory
        head.next = undefined;


        // return previous head
        return head.value;
    }

    // gets the value out of the head
    peek(): T | undefined {
        // if head is not null get the value
        // if null return undefined
        return this.head?.value;

    }
}