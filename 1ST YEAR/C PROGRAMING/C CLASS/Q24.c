#include <stdio.h>
int sum_of_digit(int n){
    if (n == 0)
       return 0;
    return (n % 10 + sum_of_digit(n / 10));
}
int main(){
    printf("%d", sum_of_digit(125));
    return 0;
}