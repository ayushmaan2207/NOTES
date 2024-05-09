// Implement Stack using array in c

// It works on LIFO
// Last in First Out
// Means The book which is last entered will be first to be exit
// ORR.............

// LOFI
// The book whihc is entered first will be exit last

// -------------------------------------------------------------------------------------

// Operations to be made to Implement Stack ------->

// Only Top most element will be accessed in Stack

// There is a push operation which add elements to array at top position to stack

// There is a pop operation which remove elements from the top poistion of stack

// There is top operation which gives the element present at top most position

// There is a size operation which returns size of Stack

// There is empty operation which tells either stack is empty or not

// ----------------------------------------------------------------------------------------

#include <stdio.h>
#include <stdlib.h>

typedef struct Stack{
    // This is the main variable being used for implementation of stack
    // It is called as a pointer technique where this last named pointers points to the specific element we need to access
    int last;
    
    // Our main Stack --> If we rotate array 90 degree anti clockwise it looks like stack
    int * arr;

} Stack;

int * buildStack(int n)
{
    // Its the basic stack building where the arr is being allocated to memory as we want

    // n is the size we entered for Stack

    // We had taken the initial size to 1000 but if by any chance our length exceeds max value , we will update max by it
    int max = 1000;
    if (n > max) max = n;

    // Now we create a new array by help of malloc --> Or we can say Stack
    int * arr = (int *)malloc(max * sizeof(int));
}

// Push
void push(Stack* st1, int data)
{
    // It will first increment our pointer to go to next index where our data will be stored
    st1->arr[++st1->last] = data;
}

// Pop
void pop(Stack* st1)
{
    // Our last pointer comes backward
    st1->last--;
}

// Top
int top(Stack* st1)
{
    // Return value at last which actully means the top element of stack
    return st1->arr[st1->last];
}

// Size
int size(Stack* st1)
{
    // Size of stack will be equal to last + 1 as last means last index of stack 
    return st1->last +1;
}

// Empty
int empty(Stack* st1)
{
    // If size is 0 means stack is empty so we return 1 meaning true
    if (size(st1)==0) return 1;

    // 0 means false
    return 0;
}

int main()
{
    // Last pointer is initialized to -1 where it says that stack is empty 
    // As size if last +1 => 0 
    Stack st1;
    st1.last = -1;

    // Enter the size of stack you want
    int n;
    scanf("%d",&n);

    // Build a stack using struct of Stack 
    st1.arr = buildStack(n);

    // Checking Working of stack by some implementations

    push(&st1, 1);
    push(&st1, 2);
    push(&st1, 3);
    push(&st1, 4);

    printf("%d ",top(&st1));
    printf("%d ",size(&st1));

    pop(&st1);
    pop(&st1);
    pop(&st1);
    pop(&st1);

    printf("%d ",size(&st1));
    printf("%d ",empty(&st1));

    return 0;
}