#include <iostream>
#include <vector>
#include <chrono>

using namespace std;
using namespace chrono;

bool isPrimeSlow(long n)
{
    long i = 2;

    while (i * i <= n)
    {
        if (n % i == 0)
        {
            return false;
        }

        i++;
    }

    return true;
}

long sumPrimesBelowSlow(int n)
{
    long sum = 0;

    for (long i = 2; i < n; i++)
    {
        if (isPrimeSlow(i))
        {
            sum += i;
        }
    }

    return sum;
}

long sumPrimesBelow(int n)
{
    vector<bool> isPrime(n, true);
    long sum = 0;

    for (long i = 2; i < n; i++)
    {
        if (isPrime[i])
        {
            sum += i;

            for (long j = i * i; j < n; j += i)
            {
                isPrime[j] = false;
            }
        }
    }

    return sum;
}

int main()
{
    // auto start1 = high_resolution_clock::now();
    // cout << sumPrimesBelowSlow(2000000) << endl;
    // auto end1 = high_resolution_clock::now();

    // For an input of 2,000,000, this solution ran 17x faster than my first one.
    auto start2 = high_resolution_clock::now();
    cout << sumPrimesBelow(2000000) << endl;
    auto end2 = high_resolution_clock::now();

    // auto elapsed1 = duration_cast<milliseconds>(end1 - start1);
    auto elapsed2 = duration_cast<milliseconds>(end2 - start2);
    // cout << "Elapsed time slow: " << elapsed1.count() << "ms" << endl;
    cout << "Elapsed time fast: " << elapsed2.count() << "ms" << endl;
}