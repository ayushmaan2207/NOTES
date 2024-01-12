#include<iostream>
using namespace std;
class arr{
    arr operator *(int b[2][2]){

    }

};

int main(){
    int a[2][2],b[2][2];
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 2; j++){
            cin>>a[i][j];
        }
    }
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 2; j++){
            cin>>b[i][j];
        }
    }
    int c[2][2]=a[2][2]*b[2][2];
    cout<<"multiplication:\n";
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 2; j++){
            cout<<c[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}