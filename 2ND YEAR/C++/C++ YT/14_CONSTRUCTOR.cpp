#include<iostream>
using namespace std;
class complex{
    int a,b;
    public:
    // creating a constructor
    // it is a special member function with same name as of the class. it is automatically invoked whenever an object is created. it is used to initialize the objects of its class.

    complex (void); // constructor declaration
    complex(int x,int y){ // parameterized constructor
        a=x;
        b=y;
    };

    void print()
    {
        cout << "your no. is  " << a << "+ " << b <<"i"<< endl; //can use this-> 
    }
};

complex :: complex (void){  // this is a default constructor as it accepts no paramaters
    a=10;
    b=0;
}
int main(){
    // DEFAULT
    complex c1,c2; //you have to make default parameter to use this
    c1.print();
    c2.print();

    // PARAMETRIZED
    // implicit call
    complex a(5,6);
    a.print();

    // explicit call
    complex b= complex(5,7);
    b.print();

    return 0;
}