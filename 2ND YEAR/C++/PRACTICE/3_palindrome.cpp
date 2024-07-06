#include<iostream>
using namespace std;
int main(){
    string a;
    cin>>a;
    int n=a.size();
    int flag=1;
    for (int i = 0; i < (n)/2; i++)
    {
        if(a[i]!=a[n-i-1]){
            flag=0;
        }
    }
    if (flag==0){
        cout<<"false";
    }
    else{
        cout<<"true";
    }
    
    return 0;
}