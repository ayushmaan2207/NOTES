#include <stdio.h>
// Function definition for swapByValue
void swapByValue(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
    printf("After swapByValue: a = %d, b = %d\n", x, y);
}
// Function definition for swapByReference
void swapByReference(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
    printf("After swapByReference: a = %d, b = %d\n", *x, *y);
}
int main() {
    int a = 5;
    int b = 10;
    printf("Before swapping: a = %d, b = %d\n", a, b);
    // Call the swapByValue function to swap variables by value
    swapByValue(a, b);
    // Call the swapByReference function to swap variables by reference
    swapByReference(&a, &b);
}