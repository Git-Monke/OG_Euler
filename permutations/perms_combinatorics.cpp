#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

long f(int n)
{
    int f = 1;

    for (int i = 1; i <= n; i++)
    {
        f *= i;
    }

    return f;
}

int main()
{
    const int max = 9;
    const int perm_number = 1000000;

    // Initialize numbers left to be used
    vector<int> digits;
    for (int i = 0; i <= max; i++)
    {
        digits.push_back(i);
    }

    // Subtract one from our permutation # so that it is 0 indexed
    int perm_n = perm_number - 1;

    // Calculate digits and output result
    for (int i = max; i >= 0; i--)
    {
        int factorial = f(i);
        int bucket = floor(perm_n / factorial);
        int digit = digits[bucket];

        digits.erase(digits.begin() + bucket);
        perm_n -= bucket * factorial;
        cout << digit;
    }
    cout << endl;

    return 0;
}