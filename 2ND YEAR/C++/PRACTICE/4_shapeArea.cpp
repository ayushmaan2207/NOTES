#include<iostream>
using namespace std;
class shape{
    public:
        float r,a,b;
        float a1;
        float a2;
        circle(){
            a1= (3.14)*r*r;
            // return a1;
        }
        rectangle(){
            a2= a*b;
            // return a2;
        }
        calculateArea(){
            cout<<"area of circle: "<<a1<<endl;
            cout<<"area of rectangle: "<<a2;
        }

};
int main(){
    shape s;
    cin>>s.r;
    cin>>s.a>>s.b;
    s.circle();
    s.rectangle();
    s.calculateArea();
    return 0;
}