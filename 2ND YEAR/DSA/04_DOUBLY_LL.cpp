#include<iostream>
#include<string>
#include<vector>
using namespace std;
class node{
    public:
    node* prev;
    int data;
    node* next;
    // constructor
    node(int data){
        this->data=data;
        this->prev=NULL;
        this->next=NULL;
    }
    // deconstructor
    ~node(){
        int value= this->data;
        if(this->next != NULL){
            delete next;
            this->next=NULL;
        }
        cout<<"memory is free for node with data "<< value<<endl;
    }

};
void print(node* &head,node* &tail){
    node* temp=head;
    while(temp != NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
    cout<<"head: "<< head->data<<endl;
    cout<<"tail: "<< tail->data<<endl;
}
int GetLen(node* &head){
    node* temp=head;
    int l=0;
    while(temp != NULL){
        l++;
        temp=temp->next;
    }
    cout<<"length is: ";
    return l;
}
void InsertAtHead(node* &head,node* &tail,int d){
    // empty list
    if(head==NULL){
        node* temp=new node(d);
        head=temp;
        tail=temp;
        return;
    }
    node* temp=new node(d);
    temp->next=head;
    head->prev=temp;
    head=temp;
}
void InsertAtTail(node* &head,node* &tail,int d){
    if(tail==NULL){
        node* temp=new node(d);
        tail=temp;
        head=temp;
        return;
    }
    node* temp=new node(d);
    tail->next=temp;
    temp->prev=tail;
    tail=temp;
}
void InsertAtPos(node* &head,node* &tail,int d,int p){
    if(p==1){
        InsertAtHead(head,tail,d);
        return;
    }
    node* temp=head;
    int c=1;
    while(c<p-1){
        temp=temp->next;
        c++;
    }
    if(temp->next==NULL){
        InsertAtTail(head,tail,d);
        return;
    }
    node* mid=new node(d);

    mid->next=temp->next;
    temp->next->prev=mid;

    temp->next=mid;
    mid->prev=temp;

}
void DelAtPos(node* &head,node* &tail,int p){
    if(p==1){
        node* temp =head;
        temp->next->prev=NULL;
        head=temp->next;
        temp->next=NULL;
        // memory free start node
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

    del->prev=NULL;
    if(del-> next == NULL){
        tail=temp;
        temp->next=NULL;
        delete del;
        return;
    }
    temp->next=del->next;


    del->next->prev=temp;
    del->next=NULL;
    delete del;
}
int main(){
    // node* head =NULL;
    // node* tail =NULL;

    node* node1=new node(10);
    node* head =node1;
    node* tail =node1;
    print(head,tail);
    cout<<GetLen(head)<<endl;

    InsertAtHead(head,tail,11);
    print(head,tail);

    InsertAtTail(head,tail,22);
    print(head,tail);

    InsertAtPos(head,tail,69,3);
    print(head,tail);

    DelAtPos(head,tail,4);
    print(head,tail);
    return 0;
}