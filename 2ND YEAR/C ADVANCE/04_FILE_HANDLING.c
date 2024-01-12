#include<stdio.h>
#include<string.h>
int main(){
    FILE* ptr= NULL;

    // ptr=fopen("myfile.txt","r");
    // char c =fgetc(ptr);
    // printf("the character I read was %c\n",c);
    // c =fgetc(ptr);
    // printf("the character I read was %c\n",c);

    // char str[4];
    // fgets(str,5,ptr); //first space is for null character
    // printf("this string is %s\n",str);

    ptr=fopen("myfile.txt","w");
    fputc('o',ptr);
    fputs("this is ayush",ptr);

    fclose(ptr);
    return 0;
}