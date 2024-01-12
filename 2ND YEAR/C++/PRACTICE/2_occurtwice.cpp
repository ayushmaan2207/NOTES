#include <iostream>
using namespace std;
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    for (int j = 0; j < n; j++)
    {   
        int c=0;
        int a=0;
        for (int k = 0; k < n ; k++)
        {
            if(arr[j]==arr[k]){
                c++;
            }
        }
        if(c==1){
            cout<<arr[j];
            break;
        }
        
    }
    
    return 0;
}