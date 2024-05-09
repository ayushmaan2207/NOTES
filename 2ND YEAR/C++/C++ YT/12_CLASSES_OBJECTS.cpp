#include <iostream>
using namespace std;
class employee
{
public: // three types: public, private & proctected
    string name;
    int salary;

    employee(string n, int s,int sp)
    {
        this->name = n;
        this->salary = s;
        this->secretpass= sp;
    }
    void printd()
    {
        cout << "employee name is " << name << " and his salary is " << salary << endl; //can use this-> 
    }
    void getsp(){
        cout<<"the secret password is: "<<this->secretpass<<endl;
    }
private:
    int secretpass;
};

// inheritance (all employee properties + other)
class programmer : public employee{
    public:
        int errors;  
};

int main()
{
    // employee e1;
    // e1.name = "ayush";
    // e1.salary = 100;
    // cout << "employee name is " << e1.name << " and his salary is " << e1.salary << endl;
    employee e2("constructor", 1500,123456);
    // cout<< e2.secretpass; //cannot access coz it is private
    e2.printd();
    e2.getsp();
    return 0;
}