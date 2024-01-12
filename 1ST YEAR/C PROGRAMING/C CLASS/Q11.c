#include<stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int a=n,b=n,c=0,rev=0,l;
    while (b>0){
        b/=10;
        c++;
    }
    while(a>0){
        l=a%10;
        rev= rev*10 + l;
        a/=10;
    }
    printf("%d",rev);
}