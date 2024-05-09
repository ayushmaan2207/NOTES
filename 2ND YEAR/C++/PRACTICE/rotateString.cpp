#include<iostream>
#include<string>
#include<vector>
using namespace std;
    int check(string s,string a){
        if(s.size()!=a.size()){
            return 0;
        }
        else{
            for (int i = 0; i < a.size()  ; i++)
            {
                if(s==a){
                    return 1;
                }
                else{
                    char t =s[0];
                    for (int j = 0; j < a.size()-1 ; j++)
                    {
                        s[j]=s[j+1];
                    }
                    s[s.size()-1]=t;
                }
                
            }
            return 0; 
        }
    }
int main(){
    string s,a;
    cin>>s>>a;
    if(check(s,a)==1){
        cout<<"true";
    }
    else{
        cout<<"false";
    }
    return 0;
}