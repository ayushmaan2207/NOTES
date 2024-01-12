#include<stdio.h>
#include<math.h>
int main(){
    int V,u,a,t,S,T,b,c,H,p;
    printf("enter values of u,a,t,b,c,p:");
    scanf("%d %d %d %d %d %d",&u,&a,&t,&b,&c,&p);
    V=u+(a*t);
    S=(u*t)+ (a*(pow(t,2)))/2;
    T=(2*a)+ pow(b+(9*c),0.5);
    H=pow(pow(b,2)+pow(p,2),0.5);
    printf("values of V,S,T,H: %d %d %d %d",V,S,T,H);
}