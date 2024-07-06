#include<iostream>
#include<string>
using namespace std;
class email{
    public:
        string e;
    void check(){
        int flag=0;
        int flag1=0;
        for(int i=0;i< e.size();i++){
            if(e[i]=='@'){
                flag =1;
                for(int j=i+1;j< e.size();j++){
                    if(e[j]=='.'){
                        flag1 =1;
                        break;
                    }
                break;
                }
        
            }
        }
        if(flag==1 && flag1 ==1){
            cout<<"valid"<<endl;
        }
        else{
            cout<<"invalid"<<endl;
        }
    }
};

int main(){
    email s;
    cin>>s.e;
    s.check();
    return 0;
}