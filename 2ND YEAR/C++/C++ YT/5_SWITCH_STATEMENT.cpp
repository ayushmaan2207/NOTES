#include<iostream>
using namespace std;
int main(){
    int age;
    cout<<"enter your age"<<endl;
    cin>>age;

    switch (age)
    {
    case 150:
        cout<<"invalid age";
        break;

    case 18:
        cout<<"you can vote";
        break;
    
    default:
        cout<<"you cannot vote";
        break;
    }
    return 0;
}