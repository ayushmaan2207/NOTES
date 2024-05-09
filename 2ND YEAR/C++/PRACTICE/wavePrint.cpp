#include<iostream>
#include<string>
#include<vector>
using namespace std;
void wave(int matrix[][4]){
    int j=0;
    while(j<4){
        for (int i = 0; i < 4; i++)
        {
            cout<<matrix[i][j]<<" ";
        }
        j++;
        for (int i =3; i>=0; i--)
        {
            cout<<matrix[i][j]<<" ";
        }
        j++;
    }
}

int main(){
    int matrix[4][4] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
                cout<<matrix[i][j]<<" ";
        }
        cout<<endl;
    }
    
    wave(matrix);
    return 0;
}