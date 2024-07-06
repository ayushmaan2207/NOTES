#include<stdio.h>
int main(){
    char chrName[]="Ayush"; 
    int chrAge= 20;
    printf("Hello\", My name is %s.",chrName); // \" to render error(print ")
    printf("I am %d years old.\n",chrAge); // \n for new line(enter)
    chrAge=18; // can change variable in the middle
    printf("Sorry,I am %d years old.",chrAge);
    return 0;
}