#include<stdio.h>
double cube(double num){ // to return value, assign func. before main
    double result=num*num*num;
    return result;
    printf("hello"); //will not print
}
void sayHi(char name[],int age);
int sum(int a,int b);  // to defin return func. after main

int main(){
    sayHi("ayush",18);
    printf("ans: %f\n",cube(2));
    printf("sum is %d",sum(3,5));
    return 0;
}
int sum(int a,int b){
    int ans=a+b;
    return ans;
}
void sayHi(char name[],int age){ //void for not returning any value
    printf("hello %s you are %d yrs old\n",name,age);
}