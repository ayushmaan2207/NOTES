#include<stdio.h>
int main(){
    int a,b,c;
    printf("Enter 3 number a,b&c: ");
    scanf("%d %d %d",&a,&b,&c);
    if(a>b){
        if(a>c){
            printf("a is greatest");
        }
    }
    else if(b>a){
        if(b>c){
            printf("b is greatest");
        }
    }
    else{
        printf("c is greatest");
    }
}