#include <iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the size of the matrices: ";
    cin >> n;

    // Input for the first matrix
    int li1[n][n];
    cout << "Enter elements for the first matrix:\n";
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            cin >> li1[i][j];

    // Input for the second matrix
    int li2[n][n];
    cout << "Enter elements for the second matrix:\n";
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            cin >> li2[i][j];

    // Matrix multiplication
    int li_ans[n][n];
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j) {
            li_ans[i][j] = 0;
            for (int k = 0; k < n; ++k)
                li_ans[i][j] += li1[i][k] * li2[k][j];
        }

    // Printing the result
    cout << "\nMatrix Multiplication Result:\n";
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j)
            cout << li_ans[i][j] << " ";
        cout << endl;
    }

    return 0;
}
