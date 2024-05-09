#include<iostream>
#include<string>
#include<vector>
// include this library
#include<stack>
using namespace std;

class Stack{
    public:
        int *arr;
        int top;
        int size;

    Stack(int size){
        this->size=size;
        arr=new int[size];
        top =-1;
    }  
    void push(int ele){
        if(size-top>1){
            top++;
            arr[top]=ele;
        }
        else{
            cout<<"Stack Overflow"<<endl;
        }
    } 

    void pop(){
        if(top>0){
            top--;
        }
        else{
            cout<<"Stack Underflow"<<endl;
        }
    } 

    int peek(){
        if(top>=0 && top<size){
            return arr[top];
        }
        else{
            cout<<"Stack is Empty"<<endl;
            return -1;
        }
    } 

    bool isEmpty(){
        if(top==-1){
            return true;
        }
        else{
            return false;
        }
    }
};


int main(){
    // STACK USING ARRAY

    Stack st(5);
    st.push(22);
    st.push(5);
    st.push(69);
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
    if(st.isEmpty()){
        cout<<"stack is empty";
    }
    else{
        cout<<"stack is not empty";
    }

    // STACK USING STL 

    // stack<int> s;
    // s.push(2);
    // s.push(3);
    // s.pop();
    // cout<<"size: "<<s.size()<<endl;
    // cout<<"top element: "<<s.top()<<endl;
    // if(s.empty()){
    //     cout<<"stack is empty";
    // }
    // else{
    //     cout<<"stack is not empty";
    // }


    return 0;
}