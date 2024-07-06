#include<stdio.h>
int main(){
    int n;
    printf("enter n:");
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    int k,a=1;
    printf("enter k:");
    scanf("%d",&k);
    while(a<=k){
        int temp=arr[n-1];
        for(int j=0;j<n;j++){
            arr[n-j-1]=arr[n-2-j];
        }
        a++;
        arr[0]=temp;
    }
    for(int l=0;l<n;l++){
        printf("%d ",arr[l]);
    }
}