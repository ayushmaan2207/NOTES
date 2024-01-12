#include<stdio.h>
int main(){
    float a,b,d;
    printf("enter 2 nos.: ");
    scanf("%f %f",&a,&b);
    char c;
    printf("enter operation: ");
    scanf("%s",&c);

    switch(c){
        case '+':
            d=a+b;
            printf("sum is: %f",d);
            break;
        case '-':
            d=a-b;
            printf("subtraction is: %f",d);
            break;
        case '*':
            d=a*b;
            printf("multiplication is: %f",d);
            break;
        case '/':
            d=a/b;
            if(a==0 && b==0){
                printf("invalid");
            }
            else if(b==0){
                printf("division is: infinite");
            }

            else{
                printf("division is: %f",d);
                }
            break;
        default :
            printf("invalid operation");
        }

}