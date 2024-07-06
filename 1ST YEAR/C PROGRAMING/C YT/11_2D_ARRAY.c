#include<stdio.h>
int main(){
    int i,j,n,m;
    printf("enter n&m: ");
    scanf("%d %d",&n,&m);
    char arr[n][m];
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            printf("enter ele %d of %d: ",j,i);
            scanf("%d",&arr[i][j]);
        }
    }
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
}