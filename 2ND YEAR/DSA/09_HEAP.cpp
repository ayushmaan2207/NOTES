#include <iostream>
#include <string>
#include <vector>
// importing for priority queue
#include<queue>
using namespace std;
/*
node -> ith index
left child -> 2*i index
right child -> (2*i)+1 index
parent -> i/2 index
*/
class heap
{
public:
    int arr[100];
    int size = 0;
    heap(){
        arr[0]=-1;
        size=0;
    }
    void insert(int val)
    {
        size += 1;
        int index = size;
        arr[index] = val;

        while (index > 1)
        {
            int parent = index / 2;
            if (arr[parent] < arr[index])
            {
                swap(arr[parent], arr[index]);
                index = parent;
            }
            else
            {
                return;
            }
        }
    }
    void del(){
        if (size==0){
            cout<<"nothing to delete"<<endl;
            return;
        }
        // step 1: put last ele in index 1
        arr[1]=arr[size];
        // step 2: rempve last ele
        size--;
        // step 3: take root node to its correct position
        int i=1;
        while(i<size){
            int leftindex=2*i;
            int rightindex=2*i+1;

            if(leftindex<size && arr[i]<arr[leftindex]){
                swap(arr[i],arr[leftindex]);
                i=leftindex;
            }
            else if(rightindex<size && arr[i]<arr[rightindex]){
                swap(arr[i],arr[rightindex]);
                i=rightindex;
            }
            else{
                return;
            }
        }
    }
    void print()
    {
        for (int i = 1; i <= size; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

void heapify(int arr[],int n,int i){
    int largest  =i;
    int left =2*i;
    int right =2*i+1;

    if (left<=n && arr[largest]<arr[left]){
        largest =left;
    }
    if (right<=n && arr[largest]<arr[right]){
        largest =right;
    }
    if(largest!=i){
        swap(arr[largest],arr[i]);
        heapify(arr,n,largest);
    }
}

void heapsort(int arr[],int n){
    int size=n;
    while(size>1){
        swap(arr[1],arr[size]);
        size--;
        heapify(arr,size,1);
    }
}

int main()
{
    heap h;
    h.insert(50);
    h.insert(55);
    h.insert(53);
    h.insert(54);
    h.insert(52);
    h.print();
    h.del();
    h.print();

    // HEAPIFY ALGORITHM [ log(n)]

    /*
    leaf nodes -> ((n/2)+1) to (n) index
    */

    int arr[6]={-1,51,55,53,52,50};
    int n=5;
    for (int i=n/2;i>0;i--){
        heapify(arr,n,i);
    }
    cout<<"printing heapify algo array now"<<endl;
    for (int i=1;i<=n;i++){
        cout<<arr[i]<<" ";
    }cout<<endl;

    // HEAP SORT [n log(n)]
    heapsort(arr,n);
    cout<<"printing heapsort array now"<<endl;
    for (int i=1;i<=n;i++){
        cout<<arr[i]<<" ";
    }cout<<endl;

    // PRIORITY QUEUE
    cout<<"using priority queue now"<<endl;

    // max heap
    priority_queue<int> pq;
    pq.push(50);
    pq.push(55);
    pq.push(53);
    pq.push(54);
    pq.push(52);
    cout<<"top ele "<<pq.top()<<endl;
    pq.pop();
    cout<<"top ele "<<pq.top()<<endl;
    cout<<"size "<<pq.size()<<endl;
    cout<<"is empty "<<pq.empty()<<endl;

    // min heap
    priority_queue<int, vector<int>,greater<int>> minheap;
    minheap.push(50);
    minheap.push(55);
    minheap.push(53);
    minheap.push(54);
    minheap.push(52);
    cout<<"top ele "<<minheap.top()<<endl;
    minheap.pop();
    cout<<"top ele "<<minheap.top()<<endl;
    cout<<"size "<<minheap.size()<<endl;
    cout<<"is empty "<<minheap.empty()<<endl;
    return 0;
}