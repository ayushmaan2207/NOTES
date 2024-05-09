#include<iostream>
using namespace std;

int factorial(int n){
    if (n<=1){
        return 1;
    }
    return n*factorial(n-1);
}
int fib(int n){
    if (n<=2){
        return 1;
    }
    return fib(n-2)+ fib(n-1);
}

int main(){
    // Factorial of a no.
    int a;
    cout<<"Enter a no. : ";
    cin>>a;
    cout<<"Factorial of "<<a<<" is "<<factorial(a);

    // Fibonacci (use iteration instead of recurssion in this case)
    // int a;
    // cout<<"Enter a no. : ";
    // cin>>a;
    // cout<<a<<"th element of fibonacci is "<<fib(a);
    // return 0;
}