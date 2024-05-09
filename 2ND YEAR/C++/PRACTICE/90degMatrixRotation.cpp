#include <iostream>
using namespace std;
//Rotating a matrix 90 degree
void display(int matrix[][4]){
    for (int i=0 ; i<4 ; i++){
        for(int j=0 ; j<4 ; j++){
        cout<<matrix[i][j]<<" ";
            
        }
        cout<<endl;
    }
}
void transpose(int matrix[][4],int m){
    for(int i=0 ; i<m ; i++){
        for(int j=i+1 ; j<m ; j++){
            swap(matrix[i][j] , matrix[j][i]);
        }
    }

}
void cw(int matrix[][4]){
    transpose(matrix,4);
    for (int i=0 ; i<4 ; i++){
        for(int j=3 ; j>=0 ; j--){
            cout<<matrix[i][j]<<" ";
        }
        cout<<endl;
    }
}
void anticw(int matrix[][4]){
    // transpose(matrix,4);
    cout<<"anti"<<endl;
    display(matrix);
    cout<<endl;
    for (int i=0 ; i<4/2 ; i++){
        for(int j=0 ; j<4 ; j++){
            swap(matrix[i][j],matrix[4-i-1][j]);
        }
    }
    
}


int main(){
    int matrix[4][4] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    display(matrix);
    cout<<endl;

    cw(matrix);
    cout<<endl;
    anticw(matrix);
    display(matrix);
    return 0;
}