#include<iostream>
#include<string>
#include<vector>
using namespace std;
class node{
    public:
    int data;
    node* next;
    // constructor
    node(int data){
        this-> data =data;
        this-> next= NULL;
    }
    // deconstructor
    ~node(){
        int value= this->data;
        // memory free
        if(this->next != NULL){
            delete next;
            this->next=NULL;
        }
        cout<<"memory is free for node with data "<< value<<endl;
    }
}; 
void InsertAtHead(node* &head,int d){
    node* temp = new node(d);
    temp->next=head;
    head=temp;
}
void InsertAtTail(node* &tail, int d){
    node* temp=new node(d);
    tail->next=temp;
    tail=tail->next;
}
void InsertAtPos(node* &head,node* &tail,int p,int d){
    // insert at start
    if(p==1){
        InsertAtHead(head,d);
        return;
    }
    node* temp = head;
    int count =1;
    while (count<p-1){
        temp=temp->next;
        count++;
    }
    // insert at end
    if(temp-> next == NULL){
        InsertAtTail(tail,d);
        return;
    }
    node* mid = new node(d); //memory is allocated in heap
    mid->next=temp->next;
    temp->next=mid;
}
void DelAtPos(node* &head,node* &tail,int p){
    if(p==1){
        node* temp =head;
        head=head->next;
        // memory free start node
        temp->next=NULL;
        delete temp;
        return;
    }
    node* temp =head;
    int c =1;
    while(c<p-1){
        temp=temp->next;
        c++;
    }
    node* del=temp->next;
    temp->next=del->next;
    if(del-> next == NULL){
        tail=temp;
    }
    del->next=NULL;
    delete del;
}
void print(node* &head){
    node* temp = head;
    while (temp != NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
}
// reverse a LL using recursion;
void reverseList(node* &head){
    node* temp=head;
        if(!temp ){
            return ;
        }
        reverseList(temp->next);
        cout<<temp->data<<" ";
}
int main(){
    // created new node
    node* node1= new node(10);

    // head & tail pointed to node1
    node* head = node1;
    node* tail= node1;
    print(head);
    // insert at start
    InsertAtHead(head,11);
    print(head);
    // insert at end
    InsertAtTail(tail,22);
    print(head);
    // insert at position
    InsertAtPos(head,tail,3,69);
    print(head);
    // delete at position
    DelAtPos(head,tail,4);
    print(head);

    cout<<"head: "<< head->data<<endl;
    cout<<"tail: "<< tail->data<<endl;


    reverseList(head); 
    return 0;
}
 