const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// data structure to keep the nodes of a singly linkedlist
class Node {
    constructor(data, next) {
        this._data = data;
        this._next = next;
    }
    get data() {
        return this._data
    }
    set data(d) {
        this._data = d;
    }
    get next() {
        return this._next;
    }
    set next(next) {
        this._next = next
    }
}
// data structure for the actual list of nodes.
class LinkedList {
    constructor() {
        this._head = null;
    }

    get head() {
        return this._head;
    }

    printList() {
        var current = this._head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
        return this;
    }

    insertAtEnd(node) {
        if(this._head === null || this._head === undefined) {
            this._head = node;
        }
        else {
            var current = this._head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

rl.question('Do you want to create a linked list?(y/n) ', (create) => {
    if(create.toLocaleLowerCase() === 'y') {
        console.log('creating object of linked list class');
        var list = new LinkedList();
        var nodeDataQuestion = () => {
            rl.question('Enter data for the new node', (data) => {
                var newNode = new Node(data)
                list.insertAtEnd(newNode);
                console.log('head', JSON.stringify(list.head))
                rl.question('Do you want to create another Node or print the linklist?(c/p)', (createAnother) => {
                    if(createAnother.toLowerCase() === 'p') {
                        list.printList()
                        rl.close();
                    }
                    else if(createAnother.toLowerCase() === 'c') {
                        nodeDataQuestion();
                    }
                    else {
                        rl.close();
                    }
                });
            });
        }
        nodeDataQuestion();
        
    }
    else {
        rl.close()
    }
});

rl.on('close', () => {
    console.log('BYE BYE !!');
    process.exit(0);
})