var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    
//     this condition is for when there's no cycle and there's a null value
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow) return true;
    }
    
    return false;
};