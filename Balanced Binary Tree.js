class TreeNode{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

const getHeight = (root) => {
    if (root === null) return 0;

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
};

var isBalanced = function(root) {
    const checkBalanced = (node) => {
        if(node === null) return true;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        if(Math.abs(leftHeight - rightHeight) > 1) return false;

        return checkBalanced(node.left) && checkBalanced(node.right);
    };

    return checkBalanced(root);
};

//Example usage:
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(isBalanced(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(3);
root2.left.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(4);

console.log(isBalanced(root2));

const root3 = null;

console.log(isBalanced(root3));