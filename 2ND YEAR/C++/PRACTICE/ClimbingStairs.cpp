#include<iostream>
using namespace std;
int cs(int n){
    if (n==1){
        return 1;
    }
    else if (n==2){
        return 2;
    }
    return cs(n-1) + cs(n-2);
}

int main(){
    int a;
    cout<<"Enter no. of stairs: ";
    cin>>a;
    cout<<"no. of ways are "<<cs(a);
    return 0;
}