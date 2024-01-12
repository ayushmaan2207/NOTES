#include<stdio.h>
#include<stdlib.h>
struct Student{ // first letter capital
    char name[50];
    char major[50];
    int age;
    double gpa;
};
int main(){
    struct Student student1;
    student1.age=18;
    student1.gpa=3.2;
    strcpy(student1.name,"ayush"); // for storing char
    strcpy(student1.major,"artist");

    printf("%s",student1.name);
    return 0;
}