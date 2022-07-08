var maxDepth = function(root) {
    if (!root) return 0;
    // we're returning 1 + because the root sits 1 higher than the children
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// BFS approach

var maxDepth = function(root) {
    let max = 0;

    let BFS  = (node, level) => {
        if (!node) return;
        if(level > max) max = level;
        BFS(node.left, level+1);
        BFS(node.right, level+1);
    }
    // starts at 1 because the root sits 1 higher than the children
    BFS(root, 1);
    return max;
}