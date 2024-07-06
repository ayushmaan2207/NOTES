#include<stdio.h>
int main(){
    int arr[3][3]={{1,4,3},{2,4,6},{1,0,5}};
    int li[3][3]={{2,0,0},{3,2,0},{0,4,2}};
    int re[3][3]={{0,0,0},{0,0,0},{0,0,0}};
    for(int k=0;k<3;k++){    
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                if(k==i){
                    re[k][i]+=arr[i][j]*li[j][i];
                }
                else{
                    re[k][i]+=arr[k][j]*li[j][i];
                }
            }
        }
    }
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
                printf("%d ",re[i][j]);
        }
        printf("\n");
    }
    return 0;
}