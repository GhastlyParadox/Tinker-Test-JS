const LinkedList = require('./linkedlist');

describe('#insertAtHead', () => {
    test('adds element to beginning of list', () => {
        const list = new LinkedList();
        list.insertAtHead(10);
        const oldhead = list.head;
        list.insertAtHead(20)

        expect(list.head.value).toBe(20);
        expect(list.head.next).toBe(oldhead);
        expect(list.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('return nulist', () => {
            const list = LinkedList.fromValues(10, 20)
            expect(list.getByIndex(-1)).toBeNull();

        })
        

    })
    describe('with index greater than length of list', () => {
        test('return nulist', () => {
            const list = LinkedList.fromValues(10, 20)
            expect(list.getByIndex(27)).toBeNull();

        })
        

    })
    describe('with index 0', () => {
        test('return head', () => {
            const list = LinkedList.fromValues(10, 20);
            expect(list.getByIndex(0).value).toBe(10);

        })
    })
    describe('with index in the middle', () => {
        test('return value at index', () => {
            const list = LinkedList.fromValues(10, 20, 30, 40, 50, 60);
            expect(list.getByIndex(4).value).toBe(50);
        })
    })
})