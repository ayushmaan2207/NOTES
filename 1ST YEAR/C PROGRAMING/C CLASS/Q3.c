#include<stdio.h>
int main(){
    int r,a,c;
    printf("Enter radius:");
    scanf("%d",&r);
    a=3.14*(r*r);
    c=2*(3.14*r);
    printf("circumference: %d\narea: %d",c,a);
}