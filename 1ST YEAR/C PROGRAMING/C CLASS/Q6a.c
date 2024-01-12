#include<stdio.h>
int main(){
    int a,b,temp;
    printf("Enter 2 number a & b: ");
    scanf("%d %d",&a,&b);
    temp=a;
    a=b;
    b=temp;
    printf("number a & b: %d %d",a,b);
}