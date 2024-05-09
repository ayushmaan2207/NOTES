#include<iostream>
using namespace std;
class Time{
    public:
    int hr,min,sec;
    Time (){}
    Time(int h,int m,int s){
        hr=h;min=m;sec=s;
    }
    Time operator +(Time inp){
        int th,tm,ts;
        ts=(sec+inp.sec)%60;
        tm=((min+inp.min)+(ts/60))%60;
        th=((hr+inp.hr)+(tm/60))%24;
        return Time(th,tm,ts);
    }
    void display(){
        cout<<hr<<":"<<min<<":"<<sec<<endl;
    }
};

int main(){
    Time t1,t2;
    cin>>t1.hr>>t1.min>>t1.sec;
    cin>>t2.hr>>t2.min>>t2.sec;
    Time t3=t1+t2;
    t3.display();
    return 0;
}