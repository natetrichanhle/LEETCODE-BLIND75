var reverseList = function (head) {
    let curr = head;
    let prev = null;
    let next = null;

    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};