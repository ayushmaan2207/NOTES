#include<iostream>
using namespace std;
int add (int x,int y){//x & y are parameters
    int c;
    c=x+y;
    return c;
} 
int rev(int n){
    int a=n;
    int l,r=0,c=0;
    while(a>0){
        l=a%10;
        r=(r*10)+l;
        c++;
        a=a/10;
    }
    return r;
}

int main(){
    int a,b;
    cout<<"enter first number: ";
    cin>>a;
    cout<<"enter second number: ";
    cin>>b;
    //calling by value
    cout<<"the function returned: "<<add(a,b)<<endl;//a and b are arguments
    
    // Rev of a no.
    int n;
    cout<<"Enter a no. : ";
    cin>>n;
    cout<<"reverse of "<<n<<" is "<<rev(n);
    return 0;
}