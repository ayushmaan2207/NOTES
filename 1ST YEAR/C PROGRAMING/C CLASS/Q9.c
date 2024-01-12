#include<stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int c=1,s=0;
    while (c<=n){
        s+=c;
        c++;
    }
    printf("%d",s);
}