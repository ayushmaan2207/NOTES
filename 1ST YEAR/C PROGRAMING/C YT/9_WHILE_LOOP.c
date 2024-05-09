#include<stdio.h>
int main(){
    int index=1;
    while(index<=5){
        printf("%d\t",index);
        index++; // index+=1
    }
    printf("\n");
    int n=1;
    do{                     //perform task then checks condition
        printf("%d\t",n);
        n++;
    }while(n<=5);
    printf("\n%d",n);
}