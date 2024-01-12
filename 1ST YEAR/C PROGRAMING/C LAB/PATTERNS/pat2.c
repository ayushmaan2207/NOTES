#include <stdio.h>
int main() {
    int n,i,j;
    printf("enter value of n: ");
    scanf("%d",&n);
    // upper
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(j>=n-i+2){
                printf("*");
            }
            else{
                printf("%d",j);
            }
        }
    for(j=1;j<=n;j++){
            if(j<i){
                printf("*");
            }
            else{
                printf("%d",n-j+1);
            }
        }
        printf("\n");
    }
    // middle line
    for(j=1;j<=2*n;j++){
        printf("*");
    }
    printf("\n");
    // lower
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(j>i){
                printf("*");
            }
            else{
                printf("%d",j);
            }
        }
    for(j=1;j<=n;j++){
            if(j<=n-i){
                printf("*");
            }
            else{
                printf("%d",n-j+1);
            }
        }
        printf("\n");
    }
    return 0;
}