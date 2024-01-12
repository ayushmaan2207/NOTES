#include<stdio.h>
int ArrSum(int arr[],int n){
    int sum = 0;
    for (int i = 0; i<n; i++) {
        sum += arr[i];
    }
    return sum;
}
int main(){
    int n;
    scanf("%d",&n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    printf("%d",ArrSum(arr,n));
}