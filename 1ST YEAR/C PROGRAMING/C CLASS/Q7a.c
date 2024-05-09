#include<stdio.h>
int main(){
    int a,b,c;
    printf("Enter 3 number a,b&c: ");
    scanf("%d %d %d",&a,&b,&c);
    (a>b)?
    ((a>c)? 
    printf("a is greatest no."):
    printf("c is greatest no.")):
    (b>c)?
    printf("b is greatest no."):
    printf("c is greatest no.");
}