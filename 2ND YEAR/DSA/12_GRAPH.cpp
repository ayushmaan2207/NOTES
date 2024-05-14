#include<iostream>
#include<string>
#include<vector>
#include<unordered_map>
#include<list>
#include<queue>

using namespace std;
template <typename T>
class graph{ 
    public:
        unordered_map<T,list<T>> adj;

//  1.  ADJACENCY LIST

    void addEdge(T u,T v,bool direction){
    /*  direction = 0 -> undirected graph
        direction = 1 -> directed graph     */

        // create an edge from u to v
         adj[u].push_back(v);

         if(direction ==0){
            adj[v].push_back(u);
         }
    }

    void printAdjList(){
        for(auto i:adj){
            cout<<i.first<<"->";
            for(auto j:i.second){
                cout<<j<<",";
            }
            cout<<endl;
        }
    }

//  2.  BFS

    void bfs(unordered_map<int,bool> &used,int i){
        queue<int> q;
        q.push(i);
        while(!q.empty()){
            int temp=q.front();
            cout<<temp<<" ";
            q.pop();
            used[temp]=true;
            for(auto j : adj[temp]){
                if(!used[j]){
                    q.push(j);
                    used[j]=true;
                }
            }
        }
        cout<<endl;
    }
    void BFS(int n){
        unordered_map<int,bool> used;

        for(int i=0;i<n;i++){
            if(!used[i]){
                bfs(used,i);
            }
        }

    }

//  3.  DFS

    void dfs(unordered_map<int,bool> &used,int i){
        queue<int> q;
        q.push(i);
        while(!q.empty()){
            int temp=q.front();
            cout<<temp<<" ";
            q.pop();
            used[temp]=true;
            for(auto j : adj[temp]){
                if(!used[j]){
                    q.push(j);
                    used[j]=true;
                    break;
                }
            }
        }
        cout<<endl;
    }
    void DFS(int n){
        unordered_map<int,bool> used;

        for(int i=0;i<n;i++){
            if(!used[i]){
                dfs(used,i);
            }
        }

    }

// CYCLE DETECTION
    //  1. Undirected Graph
    

};
int main(){
    int n;
    cout<<"Enter the number of nodes: ";
    cin>>n;
    int m;
    cout<<"Enter the number of edges: ";
    cin>>m;

    graph<int> g;

    for(int i=0;i<m;i++){
        int u,v;
        cin>>u>>v;
        // creating an undirected graph
        g.addEdge(u,v,0);
    }

    // printing
    cout<<"Adjacency List"<<endl;
    g.printAdjList();
    cout<<"BFS Traversal"<<endl;
    g.BFS(n);
    cout<<"DFS Traversal"<<endl;
    g.DFS(n);
    return 0;
}