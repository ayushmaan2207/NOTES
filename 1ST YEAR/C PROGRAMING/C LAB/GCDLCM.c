#include<stdio.h>
int main(){
    int n1,n2,gcd,lcm,i;
    scanf("%d",&n1);
    scanf("%d",&n2);
    // loop to find the GCD
    for(i=1;i<=n1 && i<=n2;i++){
        // check if i is a factor of both integers
        if(n1%i==0 && n2%i==0){
            gcd=i;
        }
    }
    lcm=(n1*n2)/gcd;
    printf("%d",lcm);
}