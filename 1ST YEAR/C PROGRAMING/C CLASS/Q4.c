#include<stdio.h>
int main(){
    int a,b,c,d,e,f;
    printf("Enter 2 number:");
    scanf("%d %d",&a,&b);
    c=a+b;
    d=a-b;
    e=a*b;
    f=a/b;
    printf("add: %d\nsub: %d\nmul: %d\ndiv: %d",c,d,e,f );
}