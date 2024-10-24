import java.util.*;

public class _10_TREES {
    static class Node{
        int data;
        Node left;
        Node right;
        
        Node(int data) {
            this.data=data;
            this.left=null;
            this.right=null;
        }  
    }
    

// BINARY TREE

    static class BinaryTree{
    // BUILDING A TREE FROM PRE-ORDER 
        static int idx=-1;
        public static Node buildTree(int nodes[]){
            idx++;
            if(nodes[idx]==-1){
                return null;
            }
            Node newNode = new Node(nodes[idx]);
            newNode.left=buildTree(nodes);
            newNode.right=buildTree(nodes);

            return newNode;
        } 
    }

// BINART SEARCH TREE
    public static Node buildBST(Node root,int val) {
        if(root==null){
            root = new Node(val);
            return root;
        }
        if(root.data>val){
            root.left=buildBST(root.left, val);
        }
        else{
            root.right= buildBST(root.right, val);
        }
        return root;
    }

// LEVEL ORDER TRAVERSAL
    public static void levelOrderTraversal(Node root) {
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        q.add(null);

        while(!q.isEmpty()){
            Node currNode= q.remove();
            if(currNode==null){
                System.out.println();
                if(!q.isEmpty()){
                    q.add(null);
                }
            }else{
                System.out.print(currNode.data+" ");
                if(currNode.left!=null){
                    q.add(currNode.left);
                }
                if(currNode.right!=null){
                    q.add(currNode.right);
                }
            }
        }

    }

// In-Order Traversal
    public static void inOrderTraversal(Node root) {
        if(root==null){
            return;
        }
        inOrderTraversal(root.left);
        System.out.print(root.data+" ");
        inOrderTraversal(root.right);
    }

    public static void main(String[] args) {
        int nodes[]={1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        BinaryTree tree = new BinaryTree();
        Node root = tree.buildTree(nodes);
        levelOrderTraversal(root);
        
        
        // BST
        int values[]={5,1,3,4,2,7};
        Node bstRoot= null;
        for(int i=0;i<values.length;i++){
            bstRoot= buildBST(bstRoot, values[i]);
        }
        // In-Order Traversal of bs results in sorted order
        inOrderTraversal(bstRoot);
    }
}
