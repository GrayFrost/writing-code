class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null
  }
}
// 二叉搜索树
class Tree {
  constructor(){
    this.root = null
  }
  insert(val){
    const node = new Node(val);
    if(this.root === null){
      this.root = node;
    }else{
      _insert(this.root, val);
    }
    function _insert(root, val){
      if(val < root.val){
        _insert(root.left, val);
      }
      if(val > root.val){
        _insert(root.right, val);
      }
    }
    
  }
}