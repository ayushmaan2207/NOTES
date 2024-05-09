#include<iostream>
using namespace std;
int main(){
    int n,k;
    cin>>n>>k;
    int arr[n];
    for (int o = 0; o < n ; o++)
    {
        cin>>arr[o];
    }
     for(int i = 0; i < n ; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if(arr[i]>arr[j]){
                swap(arr[i],arr[j]);
            }
        }
    }
    cout<<arr[n-k];
    return 0;
}
