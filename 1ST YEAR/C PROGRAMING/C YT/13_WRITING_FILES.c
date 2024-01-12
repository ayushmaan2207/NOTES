#include<stdio.h>
int main(){
    /*FILE * fpointer = fopen("employees.txt","w"); // w for writing
    fprintf(fpointer,"Ayush,Head\nAnsh,Manager\nDaksh,Accounting\n");*/

    FILE * fpointer = fopen("employees.txt","a"); // a for appending
    fprintf(fpointer,"Arnav,Reception\nSarthak,Salesman\n");

    fclose(fpointer);
}