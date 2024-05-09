#include<stdio.h>
void func(int r){
    int a,c;
    a=3.14*(r*r);
    c=2*(3.14*r);
    printf("circumference: %d\narea: %d",c,a);
}
int main(){
    int r;
    printf("Enter radius:");
    scanf("%d",&r);
    func(r);
}