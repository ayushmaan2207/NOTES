#include<iostream>
using namespace std;
void hanoi(int n,char source,char help,char destination){
    if (n<1){
        return;
    }
    hanoi(n-1,source,destination,help);
    cout<< "move disk"<<n<<" from "<<source<<" to "<<destination<<endl;
    hanoi(n-1,help,source,destination);
}
int main(){
    hanoi(3,'a','b','c');
    return 0;
} 