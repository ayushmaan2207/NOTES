#include<iostream>
using namespace std;
int main(){

    // While loop
    int i=0;
    while(i<5){
        cout<<"we are at "<<i<<" index no."<<endl;
        i++;
    };

    // Do-While loop
    do{
        cout<<"we are at index no. "<<i<<endl;
        i++;
    }while(i<5);

    // For loop
    for (int j = 0; j < 5; j++)
    {
        cout<<"value of j is "<<j<<endl;
    }
    
    return 0;
}