#include<iostream>
using namespace std;
int main(){
    // 1D Array
    // int marks[6];
    // for(int i=0;i<6;i++){
    //     cout<<"enter marks of "<<i+1<<" student: ";
    //     cin>>marks[i];
    // }
    // for(int i=0;i<6;i++){
    //     cout<<"marks of "<<i+1<<" student: "<<marks[i]<<endl;
    // }

    // 2D Array
    int arr2d[2][3]={{1,2,3},{4,5,6}};
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 3; j++){
            cout<<arr2d[i][j]<<" ";
        }
        cout<<endl;   
    }
    
    // pointers and array
    int marks[]={1,2,3,4,5,6};
    marks[0]=22;
    int* p = marks;
    cout<<"value of marks[0] is "<<*p<<endl;
    cout<<"value of marks[1] is "<<*(p+1)<<endl;
    cout<<*(p++)<<endl;
    cout<<*(++p)<<endl;

    string li[2];
    li[0]="hello";
    cout<<li[0]<<endl;
    cout<<*li<<endl;
    
    return 0;
} 