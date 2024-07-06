#include<iostream>
#include<vector>
using namespace std;

int main(){
    int n, a;
    cin >> n >> a;

    vector<int> vec1;
    for (int p = 0; p < a; p++) {
        int b;
        cin >> b;
        vec1.push_back(b);
    }

    for (int i = 0; i < a; i++) {
        int c = vec1[i];
        if (c == a) {
            cout << c << endl;
        } else if (c < a) {
            for (int j = i + 1; j < a; j++) {
                if ((c + vec1[j]) == a) {
                    cout << c << " " << vec1[j] << endl;
                } else if ((vec1[i] + vec1[j]) < a) {
                    c += vec1[j];
                    for (int k = j + 1; k < a; k++) {
                        if ((c + vec1[k]) == a) {
                            cout << vec1[i] << " " << vec1[j] << " " << vec1[k] << endl;
                        } 
                    }
                }
            }
        }
    }

    return 0;
}
