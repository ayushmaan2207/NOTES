#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    int n;
    scanf("%d", &n);
  	// Complete the code to print the pattern.
    
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            printf("%d",n-j+1);
        }
        for(int k=i;k<2*n-i;k++){
            printf("%d",n-i+1);
        }
        for(int k=2*n-i+1;k<2*n;k++){
            printf("%d",k-i+1);
        }
        printf("\n");
    }
    for(int i=n-1;i>0;i--){
        for(int j=1;j<=i;j++){
            printf("%d",n-j+1);
        }
        for(int k=i;k<2*n-i;k++){
            printf("%d",n-i+1);
        }
        for(int k=2*n-i+1;k<2*n;k++){
            printf("%d",k-i+1);
        }
        printf("\n");
    }
    return 0;
}