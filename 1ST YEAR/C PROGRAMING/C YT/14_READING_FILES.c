#include <stdio.h>
int main()
{
    int count = 0;
    char ch;
    FILE *ptr = fopen("employees.txt", "r"); // r for readding
    while (!(feof(ptr)))
    {
        ch = fgetc(ptr); //??????????????
        if (ch == ' ' || ch == '\n' || ch=='\t' || ch==',')
        {
            count++;
        }
    }
    count++;
    printf("%d\n", count);
    fclose(ptr);
    return 0;

    // fgets(line,255,fpointer); //first line
    // printf("%s",line);
    // fgets(line,255,fpointer); //second line
    // printf("%s",line);
}