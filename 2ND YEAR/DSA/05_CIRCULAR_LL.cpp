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
void insert(node* &tail,int ele,int d){
    // empty list
    if (tail==NULL){
        node* temp =new node(d);
        tail=temp;
        tail->next=tail;
    }
    // non empty list
    else{
        // assuming ele is present in the list
        node* curr=tail;
        while(curr->data != ele ){
            curr=curr->next;
        }
        node* temp=new node(d);
        temp->next=curr->next;
        curr->next=temp;
    }
}
void del(node* &tail,int d){
    // empty list
    if(!tail){
        cout<<"LL is empty"<<endl;
        return;
    }
    // 1 node is present
    if(tail->next==tail){
        cout<<"empty list";
        tail=nullptr;
        return ;
    }

    // starting
    if (tail->data==d){
        tail=tail->next;
    }
    node* temp =tail;
    while(temp->data != d ){
            tail=temp;
            temp=temp->next;
        }
    
    // more than 1 node
    tail->next=temp->next;   
    temp->next=nullptr;
    delete temp;
}
void print(node* &tail){
    node* temp=tail;
    do{
        cout<<temp->data<<" ";
        temp=temp->next;
    }while(temp!= tail);
    cout<<endl;
}
int main(){
    node* tail =nullptr;
    insert(tail,5,3);
    insert(tail,3,5);
    insert(tail,5,7);
    insert(tail,7,9);
    print(tail);

    insert(tail,5,69);
    print(tail);
    cout<<"tail: "<<tail->data<<endl;


    del(tail,9);
    print(tail);
    return 0;
}