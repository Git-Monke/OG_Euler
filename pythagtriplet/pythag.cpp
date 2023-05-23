#include <iostream>
#include <math.h>
#include <chrono>

using namespace std;
using namespace chrono;

int solve(int target)
{
    float upper_bound = target / 2;

    for (float a = upper_bound; a > 0; a--)
    {
        for (float b = a; b > 0; b--)
        {
            float c = sqrt(a * a + b * b);

            if (a + b + c == target)
            {
                cout << a << " " << b << " " << c << " ";
                return a * b * c;
            }
        }
    }

    return -1;
}

int main()
{
    auto start = high_resolution_clock::now();
    cout << solve(10000) << endl;
    auto end = high_resolution_clock::now();
    auto duration = duration_cast<nanoseconds>(end - start);

    cout << "Execution time: "
         << duration.count()
         << "ns"
         << endl;
}