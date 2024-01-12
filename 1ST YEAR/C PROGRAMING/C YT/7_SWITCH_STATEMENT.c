#include<stdio.h>
int main(){
    char grade='A';
    switch(grade){
    case 'A':
        printf("you did great!");
        break;
    case 'B':
        printf("you did alright!");
        break;
    case 'C':
        printf("you did poorly!");
        break;
    case 'D':
        printf("you did very bad!");
        break;
    default :
        printf("invalid grade");
    }
}