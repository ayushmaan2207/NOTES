#include<stdio.h>
int main(){
    int n;
    printf("enter n: ");
    scanf("%d",&n);
    int i,j,l;
    for(i=1;i<=n;i++){
        l=n-i+1;
        for(j=1;j<=i;j++){
            printf("%d ",l);
            l=l-1;
        }
        printf("\n");
    }
}