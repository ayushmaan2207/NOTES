#include<iostream>
using namespace std;

int sarr(int arr[],int s,int e){
    if (s>=e){
        return 0;
    }
    for (int k = s; k <=e; k++){
        int left=0,right=0;
        for (int i=s;i<=k;i++){
            left += arr[i];
        }
        for (int j=k+1;j<=e;j++){
            right+= arr[j];
        }
        if (left==right){
            // return 1+(max(sarr(arr,s,k),sarr(arr,k+1,e)));
            return 1+(sarr(arr,s,k)+sarr(arr,k+1,e));
        }
    }
    return 0;    
}

int main(){
    int n;
    cout<<"Enter size of Array: ";
    cin>>n;
    int arr[n];
    for(int i =0;i<n;i++){
        cin>>arr[i];
    }
    cout<<sarr(arr,0,n-1)<<endl;
    return 0;
}