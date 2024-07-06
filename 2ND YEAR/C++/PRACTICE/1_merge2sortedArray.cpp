#include<iostream>
using namespace std;
int main(){
    int n,m;
    cin>>n>>m;
    int a1[n],a2[m];
    for (int i = 0; i < n; i++)
    {
        cin>>a1[i];
    }
    for (int j = 0; j < m; j++)
    {
        cin>>a2[j];
    }
    int a3[n+m];
    for (int k = 0; k < n; k++){
         a3[k]= a1[k];
    }
    for (int l = 0; l < m; l++){
        a3[l+n]=a2[l];
    }

    for (int o = 0; o < m+n; o++){
        for (int p = o+1; p < m+n; p++){
            if(a3[o]>a3[p]){
                swap(a3[o],a3[p]);
            }
        }
    }
    for (int q = 0; q < n+m; q++){
        cout<<a3[q]<<" ";
    }
    
    return 0;
}