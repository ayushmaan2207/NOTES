#include<stdio.h>
#include<math.h>
int main(){
    int n;
    scanf("%d",&n);
    int a=n,b=n,c=0,arm=0;
    while (b>0){
        b/=10;
        c++;
    }
    for(int i=0;i<c;i++){
        int l=a%10;
        arm+= pow(l,c);
        a/=10;
    }
    if(n==arm){
        printf("armstrong no.");
    }
    else{
        printf("not an armstrong no.");
    }
}