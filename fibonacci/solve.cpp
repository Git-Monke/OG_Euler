#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

int main()
{
    long long a = 2;
    long long b = 3;
    long long ab = 5;

    for (int i = 0; i < 100; i++)
    {
        int next = ab + b;
        a = b;
        b = ab;
        ab = next;

        cout << ab << endl;
    }

    return 0;
}