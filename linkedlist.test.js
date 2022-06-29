// const { expect } = require('chai');
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

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('no insertion', () => {
            const linked = LinkedList.fromValues(10, 20);
            linked.insertAtIndex(-1, 5);
            expect(linked.length).toBe(2);
        })
       

    })
    describe('with index greater than list length', () => {
        test('no insertion', () => {
            const linked = LinkedList.fromValues(10, 20);
            linked.insertAtIndex(5, 30);
            expect(linked.length).toBe(2);
        })
        
    })
    describe('with index 0', () => {
        test('should insert at head', () => {
            const linked = LinkedList.fromValues(10, 20);
            linked.insertAtIndex(0, 5);
            expect(linked.head.value).toBe(5);
            expect(linked.head.next.value).toBe(10);
            expect(linked.length).toBe(3);

        })     
    })
    describe('with index in the middle', () => {
        test('should insert at specified index', () => {
            const linked = LinkedList.fromValues(10, 20, 30, 40);
            linked.insertAtIndex(3, 35);
            const node = linked.getByIndex(3);
            expect(node.value).toBe(35);
            expect(node.next.value).toBe(40);
            expect(linked.length).toBe(5);

        })
        
    })
})