#include<iostream>
#include<string>
#include<vector>
using namespace std;
class TrieNode{
    public:
        char data;
        TrieNode* children[26];
        bool isTerminal;

    TrieNode(char ch){
        data=ch;
        for(int i=0;i<26;i++){
            children[i]=NULL;
        }
        isTerminal=false;
    }
};
class Trie{
    public:
        TrieNode* root;
    Trie(){
        root=new TrieNode('\0');
    }
    void insertUti(TrieNode* root,string word){
        // base case
        if(word.length()==0){
            root->isTerminal = true;
            return;
        }
        // assumption: word will be in caps
        int index=word[0]-'A';
        TrieNode* child;
        // present
        if(root->children[index]!=nullptr){
            child=root->children[index];
        }
        // absent
        else{
            child= new TrieNode(word[0]);
            root->children[index]=child;
        }

        // Recursion
        insertUti(child,word.substr(1));
    } 

    void insertWord(string word){
        insertUti(root,word);
    }

    bool searchUti(TrieNode* root,string word){
        // base case
        if(word.length()==0){
            return root->isTerminal;
        }
        int index=word[0]-'A';
        TrieNode* child;
        // present
        if(root->children[index]!=nullptr){
            child=root->children[index];
        }
        // absent
        else{
            return false;
        }
        return searchUti(child,word.substr(1));
    }
    bool searchWord(string word){
        return searchUti(root,word);
    }

    void deleteUnti(TrieNode* root,string word){
        if(word.length()==0){
            root->isTerminal=false;
            return;
        }
        int index= word[0]-'A';
        TrieNode* child;
        child=root->children[index];
        deleteUnti(child,word.substr(1));
    }
    void deleteWord(string word){
        if(searchWord(word)){
            deleteUnti(root,word);
        }
    }

};
int main(){
    Trie *t =new Trie();
    t->insertWord("ARM");
    cout<<"present or not "<<t->searchWord("AR")<<endl;
    cout<<"present or not "<<t->searchWord("ARM")<<endl;
    t->deleteWord("ARM");
    cout<<"present or not after deleting "<<t->searchWord("ARM")<<endl;
    return 0;
}