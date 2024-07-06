#include<iostream>
#include<string>
#include<vector>
#include<map>
#include<unordered_map>
using namespace std;
int main(){
    unordered_map<string,int> m;

    // Insertion

    // 1
    pair<string,int> p = make_pair("ayush",3);
    m.insert(p);
    // 2
    pair<string,int> pair2("thakur",2);
    m.insert(pair2);
    // 3
    m["mera"]=1;

    // Search
    cout<<m["thakur"]<<endl;
    cout<<m.at("ayush")<<endl;
    // cout<<m.at("naam")<<endl; // it will give error
    cout<<m["naam"]<<endl; // it will create new entry and will show zero

    cout<<"size "<<m.size()<<endl;
    cout<<"to check presence(1 for presence & 0 for absence) "<<m.count("ayush")<<endl;
    m.erase("ayush");
    cout<<"size "<<m.size()<<endl;

    // iterator
    unordered_map<string,int> :: iterator it =m.begin();
    while(it !=m.end()){
        cout<<it->first<<" "<<it->second<<endl;
        it++;
    }
    // for each loop
    for(auto i:m){
        cout<<i.first<<" "<<i.second<<endl;
    }

    return 0;
}