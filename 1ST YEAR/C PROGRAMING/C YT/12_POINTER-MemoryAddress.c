#include<stdio.h>
int main(){
    int age=30;
    int*pAge=&age; // pointer pAge storing memory address of age
    printf("age's memory address: %p\n",&age);
    printf("%p\n",pAge);
    printf("%d\n",*pAge); // dereferencing pointer pAge
    printf("%d",*&age);
}