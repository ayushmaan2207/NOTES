#include<stdio.h>
int main(){
    int a,b;
    printf("Enter 2 number a & b: ");
    scanf("%d %d",&a,&b);
    a=(a+b)-(b=a);
    printf("number a & b: %d %d",a,b);
}