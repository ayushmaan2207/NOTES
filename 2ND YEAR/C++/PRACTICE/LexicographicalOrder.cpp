#include<iostream>
#include<string>
using namespace std;
void lord(int n,int i){
    if (i>n){
        return ;
    }
    cout<<i<<endl;
    for (int x = 0; x <=9; x++){
        lord(n,i*10+x);
    }
    
}
int main(){
    int n;
    cout<<"Enter a no. : ";
    cin>>n;
    for (int i = 1 ; i <=9; i++){
        lord(n,i);
    }

    // sort lexicographically
    // int n;
    // cin>>n;
    // string arr[n];
    // for (int x = 0; x < n ; x++)
    // {
    //     cin>>arr[x];
    // }
    // for (int i = 0; i < n ; i++)
    // {
    //      for (int j = i+1; j < n ; j++)
    //     {
    //         if (arr[i]>arr[j]){
    //             swap(arr[i],arr[j]);
    //         }
    //     }
    // } 
    // for (int x = 0; x < n ; x++)
    // {
    //     cout<<arr[x]<<" ";
    // }
    // return 0;
}