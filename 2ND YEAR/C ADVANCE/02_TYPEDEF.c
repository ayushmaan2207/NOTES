#include <stdio.h>
typedef struct student
{
    char name[30];
    int id;
    int marks;
} std;

int main()
{
    int* a,b;//here a is pointer and b is integer
    typedef int* intptr;
    intptr c,d;//here both will be pointer

    // typedef int integer;
    // integer a = 4;
    // printf("value of a is %d",a);
    
    std s1;
    s1.id=56;
    printf("id of s1 is %d\n",s1.id);
    return 0;
}