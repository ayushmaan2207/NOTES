#include<stdio.h>
#include<string.h> // for name
//user defined data type
struct employee
{
    char name[30];
    int id;
    float salary;
};//e1,e2; 
// to acess the array value we use []   for struct we use . (dot / STRUCTURE MEMBER operator)

struct employee e1,e2; //global variable
void print(){
    printf("%s\n",e1.name);
}

int main(){
    // M1
    struct employee e1,e2; //local variable
    e1.id=12;
    e1.salary=1500;
    strcpy(e1.name,"thakur"); //strcpy copies string

    // M2
    // struct employee e1={"yash",12,3412};
    
    print();
    printf("%s got %f salary",e1.name,e1.salary);
    return 0;
}
