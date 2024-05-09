#include<iostream>
using namespace std;

class complex{
    public:
    int real;
    int img;
    complex(int r,int i){
        real =r;
        img=i;
    }
    complex(int r){
        real =r;
        img=0;
    }
    complex operator -(){
        return complex(-real,-img);
    }
    complex operator ++(){ //pre increment
        return complex(++real,++img);
    }
    complex operator ++(int){ //post increment
        return complex(++real,++img);
    }
    complex operator --(){
        return complex(--real,--img);
    }
    void display(){
        cout<<real<<" +"<<img<<"i"<<endl;
    }
};

int main(){
    complex c1(1,1);
    c1.display();
    complex negc1=-c1;
    negc1.display();
    complex plusc1=++c1;
    plusc1.display();
    complex minusc1=--c1;
    minusc1.display();
    return 0;
}