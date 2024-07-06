#include<stdio.h>
int multiplyNumbers(int n) {
    if (n>=1)
        return n*multiplyNumbers(n-1);
    else
        return 1;
}
int main() {
    printf("%d",multiplyNumbers(6));
    return 0;
}