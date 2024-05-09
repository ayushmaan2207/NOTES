#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> v;
    for (int q = 0; q < n ; q++)
    {
        int w;
        cin>>w;
        v.push_back(w);
    }
    for (int i = 0; i < v.size(); i++)
    {
        for (int j = i+1; j < v.size(); j++)
        {
            if(v[i]>v[j]){
                swap(v[i],v[j]);
            }
        }
        
    }
    for (int a = 0; a < v.size(); a++)
    {
        int c=0;
        for (int b = 0; b < v.size(); b++)
        {
            if(v[a]==v[b]){
                c++;
            }
        }
        cout<<c<<" ";
        a=a+c-1;
    }            
    
    return 0;
}