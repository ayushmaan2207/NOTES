#include<iostream>
using namespace std;
class num{
    public:
    num(){
        cout<< "this is the time when constructor is called for object number"<<endl;
    }
    ~num(){
        cout<< "this is the time when destructor is called for object number"<<endl;
    }
};
int main(){
    cout<<"we are inside our main func."<<endl;
    cout<<"creating first object n1"<<endl;
    num n1;
    {

        cout<<"entering this block"<<endl;
        cout<<"creating two more objects"<<endl;
        num n2,n3;
        cout<<" exiting this block"<<endl;
    }
    cout<<"back to main"<<endl;
    return 0;
}