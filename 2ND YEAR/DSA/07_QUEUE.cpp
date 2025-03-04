#include<iostream>
#include<string>
#include<vector>
// include this library
#include<queue>
using namespace std;

class Queue{
    public:
        int* arr;
        int front;
        int rear;
        int size;

    Queue(){
        size=9999;
        arr= new int[size];
        front=0;
        rear=0;
    }

    void push(int ele){
        if(rear==size){
            cout<<"Queue is full"<<endl;
        }else{
            arr[rear]=ele;
            rear++;
        }
    }

    void pop(){
        if(front==rear){
            cout<<"queue is empty"<<endl;
        }
        else{
            arr[front]=-1;
            front++;
            if(front==rear){
                front=0;
                rear=0;
        }
        }
    }

    int frontt(){
        if(rear==size){
            return -1;
        }else{
            return arr[front];
        }
    }
    
    bool isEmpty(){
        if(rear==size){
            return true;
        }else{
            return false;
        }
    }

};


int main(){

    // QUEUE USING ARRAY

    // Queue q;
    // q.push(22);
    // q.push(5);
    // q.push(69);
    // cout<<q.frontt()<<endl;
    // q.pop();
    // cout<<q.frontt()<<endl;
    // if(q.isEmpty()){
    //      cout<<"queue is empty"<<endl;
    // }
    // else{
    //     cout<<"queue is not empty"<<endl;
    // }



    // QUEUE USING STL

    queue<int> q;
    q.push(22);
    q.push(69);
    q.push(5);
    cout<<"size: "<<q.size()<<endl;
    q.pop();
    cout<<"front element: "<<q.front()<<endl;
    if(q.empty()){
        cout<<"queue is empty"<<endl;
    }
    else{
        cout<<"queue is not empty"<<endl;
    }

    // DOUBLY ENDED QUEUE

    deque<int> d;
    d.push_front(88);
    d.push_back(69);

    cout<<d.front()<<endl;
    cout<<d.back()<<endl;

    d.pop_front();
    cout<<d.front()<<endl;
    cout<<d.back()<<endl;
    d.pop_back();

    if(d.empty()){
        cout<<"queue is empty"<<endl;
    }
    else{
        cout<<"queue is not empty"<<endl;
    }
    return 0;
}