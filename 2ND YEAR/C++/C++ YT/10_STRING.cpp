#include<iostream>
#include<string> // need to add this to use string opertion
using namespace std;
int main(){
    string name ="ayush";
    cout<<"my name is "<<name<<endl;
    cout<<"the length of the name is "<<name.length()<<endl;
    cout<<"the size of the name is "<<name.size()<<endl;
    cout<<"my name is "<<name.substr(0,3)<<endl;
    cout<<"my name is "<<name.substr(2,5)<<endl;
    return 0;
}