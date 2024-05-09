#include<stdio.h>
#include<string.h>
union stud{
    int id ;
    char name[56];
};
struct student{
    int id ;
    char name[34];
};
enum week { // Indexing start from 0 by Default
    Sunday=10, // Now Indexing start from 10 
    Monday,  // Assigned 11
    Tuesday=20, // If assigned 20
    Wednesday, // Move to 21
    Thursday, // 22 and so on....
    Friday,
    Saturday
};

int main(){
    union stud s1;
    // struct student s1;
    s1.id=23;
    strcpy(s1.name,"ayush");
    printf("s1 id is %d\n",s1.id);
    printf("s1 id name is %s\n",s1.name);
    
    enum week day;
    day = Wednesday;

    printf("%d\n", day); // Wednesday index is 3 but if Sunday assigned to 1 then It gives 4
    return 0;
}