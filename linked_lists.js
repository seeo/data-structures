class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		// a Node starts with a given data property
		// a Node also has a .next property initialized as null
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		// a Linked List starts with a "head" property intialized as null
	}
	getTail() {
		let tail = this.head;
		while (tail.next !== null) {
			tail = tail.next;
		}
		return tail;
	}
	appendNode(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			const tail = this.getTail();
			tail.next = newNode;
		}
		// creates a new node with the given data and adds it to back of the list
	}
	prependNode(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
		// creates a new node with the given data and adds it to the front of the list
	}
	pop() {
		if (!this.head){
			return null
		}
		if (this.head.next == null){
			return this.head
		}
		let tail = this.getTail();
		let penTail = this.head;
		while(penTail.next !== tail){
			penTail = penTail.next;
		}
		penTail.next = null;
		return tail;

		// removes the last node from the list and returns it
	}
	removeFromFront() {
		if (!this.head){
			return null
		}
		if (this.head.next == null){
			const answer = this.head;
			this.head = null;
			return answer;

		}
		const nextHead = this.head.next;
		const answer = this.head;
		this.head = nextHead;
		return answer;
		// remove the head node from the list and return it
		// the next node in the list is the new head node
	}
	insertAt(X, data) {

		let count = 0;
		let chosenOne = this.head

		while(count !== X && chosenOne.next !== null){
			chosenOne = chosenOne.next;
			count++;

		}

		const newNode = new Node(data);
		newNode.next = chosenOne.next;
		chosenOne.next = newNode.next;

		// insert a new node into the list with the given data
		// place it after X nodes in the list
		// if X exceeds the bounds of the list, put the node at the end
		// insertAt(0, 7) would add the new node as the head
	}
	removeAt(X) {

		let count = 0;

		let prevNode = null;
		let chosenOne = this.head
		while (count !== X ){
			count++;
			if (chosenOne.next == null){
				return "ERROR, DOES NOT EXIST"
			} else {
				prevNode = chosenOne;
				chosenOne=chosenOne.next;
			}
			prevNode.next = chosenOne.next;
			return chosenOne;

		}
		// remove the Xth node from the list, considering 0 to be the first node
		// return the node that has been removed
	}
	search(data) {

		let count = 0;
		let chosenOne = this.head;

		while (chosenOne.data !==data){
			if (!chosenOne.next){
				return "ERR 404: Data not found"
			} else {
				count++;
				chosenOne = chosenOne.next;
			}
		}
		return count;

		// searches the list for a node with the given data
		// if it is found, return the "index" of the node, considering 0 to be the first node
		// if not, return false
	}
	sort() {
		let tempStuff = this.head;
		const tempArr = [];

		while (tempStuff){
			tempArr.push(tempStuff.data)
			tempStuff=tempStuff.next;
		}

		console.log(tempArr)
		const sortedArr = mergeSort(tempArr);


		let realThing = this.head;
		for (let i  = 0; i < sortedArr.length;i++){
			realThing.data = sortedArr[i];
			realThing.next = realThing

		}
		// sort the Linked List in ascending order of data values
	}
}