#include<iostream>
using namespace std;
int main(){
    int n,m;
    cin>>n>>m;
    int arr[n][m];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin>>arr[i][j];
        }
        
    }
    int flag=0;
    int a;
    cin>>a;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if(arr[i][j]==a){
                flag=1;
                break;
            }
        }
        
    }
    if (flag==0){
        cout<<"0";
    }
    else{
        cout<<"1";
    }
    return 0;
}