#include<stdio.h>
#include<stdlib.h>

int compare(const void *x_void,const void *y_void){
    // Type caseting void pointer to int 

    int x=*(int*)x_void; // Firstly we type case x_void to int pointer, Then we derefer it to use its value
    int y=*(int*)y_void;
    return x-y;
    // Ascending --> x - y
    // Descending --> y - x
}

int main(){
    int a[]={8,7,2,4,6,3,5,1,9,0};
    int length=10;

    qsort(a,length,sizeof(int),compare);
    for (int i = 0; i < length; i++)
    {
        printf("a[%d]=%d\n",i,a[i]);
    }
    
    return 0;
}