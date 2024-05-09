#include<stdio.h>
int main(){
    int n;
    printf("enter n:");
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    for (int j=0;j<n;j++){
        int c=0;
        for(int k=j;k<n;k++){
            c+=arr[k];
            printf("%d\t",c);
        }
        printf("\n");
    }
}