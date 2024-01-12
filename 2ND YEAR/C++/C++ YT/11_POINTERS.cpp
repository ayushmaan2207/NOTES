#include<iostream>
using namespace std;
int main(){
    int a =22;
    int* ptra;
    ptra=&a;
    cout<<"the value of a is "<<a<<endl;
    cout<<"the value of a is "<<*ptra<<endl;

    cout<<"the address of a is "<<&a<<endl;
    cout<<"the address of a is "<<ptra<<endl;
    return 0;
}