#include<stdio.h>
int main(){
    int age;
    printf("Enter your age: ");
    scanf("%d",&age);
    printf("my age is %d\n\n",age);

    float gpa;
    printf("Enter your gpa: ");
    scanf("%f",&gpa);
    double gpa2;
    printf("Enter your gpa2: ");
    scanf("%lf",&gpa2); // to scan double use %lf
    printf("my gpa is %f not %f \n\n",gpa,gpa2);

    char letter='A'; //only one character in ''
    char Name[]="Ayush";
    printf("my name is %s which starts with %c\n",Name,letter);

    char grade1;
    printf("Enter your grade: ");
    scanf("%c",&grade1);//only one character
    printf("your grade is %c",grade1);

    char name1[20];
    printf("Enter your name with surname: ");
    fgets(name1,20,stdin);
    printf("your name is %s asdf\n\n",name1);// it will print new line after %s
    
    char name[20];
    printf("Enter your name: ");
    scanf("%s",name);// no need to use & (only take text upto first space {it will print ayush on input ayush thakur})
    printf("your name is %s",name);
    return 0; 
}