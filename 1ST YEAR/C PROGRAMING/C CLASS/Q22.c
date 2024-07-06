#include<stdio.h>
int main(){
    int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
    int tr[3][3];
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(i!=j){
                tr[i][j]=arr[j][i];
            }
            else{
                tr[i][j]=arr[i][j];
            }
        }
    }
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
                printf("%d ",tr[i][j]);
        }
        printf("\n");
    }
    return 0;
}