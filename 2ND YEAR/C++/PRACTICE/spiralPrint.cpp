#include<iostream>
#include<string>
#include<vector>
using namespace std;
void spiral(int arr[4][4]){
    int is=0,ie=3,js=0,je=3;
    while(is<=ie && js<=je){
        for (int i = js; i <= je; i++){
            cout<<arr[is][i]<<" ";
        }
        is++;
        for (int i = is; i <= ie; i++){
            cout<<arr[i][je]<<" ";
        }
        je--;
        if(is<=ie){
            for (int i = je; i >= js; i--){
                cout<<arr[ie][i]<<" ";
            }
            ie--;
        }
        if(js<=je){
            for (int i = ie; i >= is; i--){
                cout<<arr[i][js]<<" ";
            }
            js++;
        }
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
    
    spiral(matrix);
    return 0;
}