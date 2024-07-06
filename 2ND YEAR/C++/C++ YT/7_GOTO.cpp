#include <iostream>

using namespace std;

int main()
{
    // To go to a specific place in code breaking the sequence of flow

    // Dont use it
    // It is the worse like hell

    goto label; // It will go to the label below

    cout << "This block" << endl; // This not get executed

    // As the go to called 

    // This block get executed 
    // This will skip all the set of instructions above label block 
    label : cout << "goto block" << endl;

    return 0;
}