#include<stdio.h>
int max(int a,int b,int c){
    int result;
    if(a>b && a>c){ // && is AND operator
        result=a;   // || is OR operator
    }               // != is not equal to ,where ! is negation operator
    else if(c>b){
        if(c>a){
            result=c;
        }
    }
    else{
        result=b;
    }
}
int max1(int a1,int b1,int c1){
    int result1;
    (a1>b1)?((a1>c1)?(result1=a1):(result1=c1)):((b1>c1)?(result1=b1):(result1=c1));
    return result1;
}
int main(){
    printf("%d\n",max(4,10,15));
    printf("%d",max1(4,10,15));
}