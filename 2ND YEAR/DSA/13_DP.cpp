#include<bits/stdc++.h>
using namespace std;
int tdFibo(int n,vector<int>& mem){
    if(n<=1){
        return n;
    }
    if(mem[n]!=-1){
        return mem[n];
    }
    mem[n]= tdFibo(n-1,mem)+ tdFibo(n-2,mem);
    return mem[n];
}
int main(){
    // lets take an example- fibonacci series
    int n;
    cout<<"Enter no. for fibo. series: ";
    cin>>n;

// 1. TOP-DOWN APPROACH (Recursion + Memorization)
    // TC: O(n) & SC: O(n)+O(n)
    vector<int> mem(n+1,-1);
    cout<<"TOP-DOWN APPROACH: "<<tdFibo(n,mem)<<endl;

// 2. BOTTOM-UP APPROACH (Tabulation)
    // TC & SC: Both O(n)
    // s1: creating dp array
    vector<int> dp(n+1);
    // s2: base case
    dp[0]=0;
    dp[1]=1;
    // s3: change recursion
    for(int i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
    }
    cout<<"BOTTOM-UP APPROACH: "<<dp[n]<<endl;

// 3. SPACE OPTIMISATION
    // TC: O(n) & SC: O(1)
    int prev1=0;
    int prev2=1;
    if(n<=1){
        return n;
    }
    for(int i=2;i<=n;i++){
        int curr = prev1 + prev2;
        prev1=prev2;
        prev2=curr;
    }
    cout<<"SPACE OPTIMISATION: "<<prev2<<endl;

    return 0;
}