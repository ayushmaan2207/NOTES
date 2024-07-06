#include<iostream>
#include<vector>
using namespace std;
void display(vector<int> &v){
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
}
int main(){
    vector<int> vec1;
    int ele;
    for(int i=0;i<4;i++){
        cout<<"enter an element to add to this vector: ";
        cin>>ele;
        vec1.push_back(ele); //add ele in a vector
    }
    // vec1.pop_back(); //remove end ele
    display(vec1);
    vector<int> :: iterator iter = vec1.begin();
    vec1.insert(iter+1,4,166);
    display(vec1);

    vector<int> vec2(3,4);
    display(vec2);
    cout<<"size of vec2: "<<vec2.size()<<endl;
    return 0;
}