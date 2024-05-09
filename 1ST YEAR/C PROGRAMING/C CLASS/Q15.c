#include<stdio.h>
#include<math.h>
int check(int n){
    for(int i=2;i<n;i++){
        if(n%i==0){
            break;
        }
        else if(i==n-1 && n%i!=0){
            printf("prime no.\n");
        }
    }
    int a=n,b=n,c=0,arm=0,l;
    while (b>0){
        b/=10;
        c++;
    }
    while(a>0){
        l=a%10;
        arm+=pow(l,c);
        a/=10;
    }
    if(n==arm){
        printf("armstrong no.\n");
    }
    int x=0;
    for(int i=1;i<n;i++){
        if(n%i==0){
            x+=i;
        }
    }
    if(x==n){
        printf("perfect no.\n");
    }
}
int main(){
    int n;
    scanf("%d",&n);
    check(n);
}