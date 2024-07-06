#include<iostream>
#include<string>
#include<vector>
#include<queue>

using namespace std;

class node{
    public:
        int data;
        node* left;
        node* right;
    node(int d){
        this-> data=d;
        this->left=nullptr;
        this->right=nullptr;
    }
};
node* buildTree(node* root) {
    int data;
    cout<<"Enter the data: ";
    cin>>data;

    if(data==-1){
        return nullptr;
    }
    root=new node(data);

    cout<<"Enter data for inserting in left "<<data<<endl;
    root->left=buildTree(root->left);
    cout<<"Enter data for inserting in right "<<data<<endl;
    root->right=buildTree(root->right);
    return root;
}
void levelOrderTraversal(node* root){
    queue<node*> q;
    q.push(root);
    q.push(nullptr);
    while(!q.empty()){
        node* temp=q.front();
        q.pop();

        if(temp==nullptr){ // purana level completed
            cout<<endl;
            if(!q.empty()){ // queue still have child nodes
                q.push(nullptr);
            }
        }
        else{
            cout<<temp->data<<" ";
            if(temp->left){
                q.push(temp->left);
            }
            if(temp->right){
                q.push(temp->right);
            }
        }
    }
}

void inorder(node* root){
    if( root == nullptr){
        return;
    }
    inorder(root->left);
    cout<<root->data<<" ";
    inorder(root->right);
}
void preorder(node* root){
    if( root == nullptr){
        return;
    }
    cout<<root->data<<" ";
    preorder(root->left);
    preorder(root->right);
}
void postorder(node* root){
    if( root == nullptr){
        return;
    }
    postorder(root->left);
    postorder(root->right);
    cout<<root->data<<" ";
}

int main(){
    node* root=nullptr;

    // creating tree
    root=buildTree(root);
    // 1 3 7 -1 -1 11 -1 -1 5 17 -1 -1 -1

    // level order traversal
    cout<<"levelOrderTraversal output :"<<endl; 
    levelOrderTraversal(root);
    
    // Inorder traversal (left node right)
    cout<<"inorder output :"; 
    inorder(root);
    cout<<endl;
    // Preorder traversal (node left right)
    cout<<"preorder output :"; 
    preorder(root);
    cout<<endl;
    // Postorder traversal (left right node)
    cout<<"postorder output :"; 
    postorder(root);
    cout<<endl;
    return 0;
} 