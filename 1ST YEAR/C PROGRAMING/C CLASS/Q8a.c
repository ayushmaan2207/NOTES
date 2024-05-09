#include<stdio.h>
int main(){
    char a;
    printf("enter alphabet: ");
    scanf("%c",&a);

    switch(a){
        case 'a':
            printf("alphabet is a vowel");
            break;
        case 'e':
            printf("alphabet is a vowel");
            break;
        case 'i':
            printf("alphabet is a vowel");
            break;
        case 'o':
            printf("alphabet is a vowel");
            break;
        case 'u':
            printf("alphabet is a vowel");
            break;
        default :
            printf("alphabet is a consonant");
        }
}