#include<iostream>
#include<string>
using namespace std;
    string sort(string s){
        for (int i = 0; i < s.size() ; i++)
    {
         for (int j = i+1; j < s.size() ; j++)
        {
            if (s[i]>s[j]){
                swap(s[i],s[j]);
            }
        }
    } 
    return s;
    }

    void com(string s){
        int c=1;
        for (int i = 0; i < s.size()-1 ; i++)
        {   
            int p=0;
            if(s[i]==s[i+1]){
                p++;
                c++;
            }
            else{
                cout<<s[i]<<c;
                c=1;
            }
        } 
        cout<<s[s.size()-1]<<c;
    }
int main(){
    string s;
    cin>>s;
    string a=sort(s);
    cout<<a<<endl;
    com(a);
    return 0;
}