#include<stdio.h>
int main(){
    int luckynum[7]={4,8,15,16,23,42};
    luckynum[2]=22;
    printf("%d\n",luckynum[2]);
    char phrase[20]="array asdf";
    printf("%s\n",phrase);
    printf("%d",sizeof(luckynum));
    return 0;
}