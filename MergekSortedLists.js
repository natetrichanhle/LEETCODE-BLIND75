// merge two at a time until there's only 1 list left (list.length === 1)

const mergeList = (a,b) => {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (a !== null && b !== null) {
        if (a.val < b.val) {
//             this is because it's in ascending order.
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
//     the lists can be different lengths
    current.next = a || b;
    
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        let mergedAB = mergeList(a,b);
        lists.push(mergedAB);
    }
    
    return lists[0];
};