const LinkedList = require('./linkedlist');

describe('#insertAtHead', () => {
    test('adds element to beginning of list', () => {
        const linked = new LinkedList();
        linked.insertAtHead(10);
        const prevhead = linked.head;
        linked.insertAtHead(20)

        expect(linked.head.value).toBe(20);
        expect(linked.head.next).toBe(prevhead);
        expect(linked.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('return null', () => {
            const linked = LinkedList.fromValues(10, 20)
            expect(linked.getByIndex(-1)).toBeNull();

        })
        

    })
    describe('with index greater than length of list', () => {
        test('return nulist', () => {
            const linked = LinkedList.fromValues(10, 20)
            expect(linked.getByIndex(27)).toBeNull();

        })
        

    })
    describe('with index 0', () => {
        test('return head', () => {
            const linked = LinkedList.fromValues(10, 20);
            expect(linked.getByIndex(0).value).toBe(10);

        })
    })
    describe('with index in the middle', () => {
        test('return value at index', () => {
            const linked = LinkedList.fromValues(10, 20, 30, 40, 50, 60);
            expect(linked.getByIndex(4).value).toBe(50);
        })
    })
})