#include<stdio.h>
#include<string.h>
int sum(int a,int b){
    return a+b;
}

static inline void print(){
    printf("hello world!");
}

int main(){
    printf("the sum is %d\n",sum(1,2)); //testing the pointer
    int(*fptr)(int,int);//declaring func ptr
    fptr=&sum;//creating func ptr
    int d=(*fptr)(4,6);//derefrencing func ptr
    printf("value of d id %d\n",d);

    print();//inline function
    return 0;
}