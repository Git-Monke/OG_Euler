#include <iostream>
#include <vector>
#include <algorithm>
#include <chrono>

using namespace std;
using namespace chrono;

vector<int> generate_primes(int n)
{
    vector<bool> sieve(n, true);
    vector<int> primes;

    for (int i = 2; i < n; i++)
    {
        if (sieve[i])
        {
            primes.push_back(i);

            for (int j = i; j < n; j += i)
            {
                sieve[j] = false;
            }
        }
    }

    return primes;
}

bool is_prime(int n)
{
    if (n < 0)
    {
        return false;
    }

    int i = 2;

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

int test(int a, int b)
{
    int d = 0;
    int p;

    do
    {
        d++;
        p = d * d + a * d + b;
    } while (is_prime(p));

    return d - 1;
}

int solve(int n = 1000)
{
    n -= 1;

    int a;
    int b;
    int best = 0;
    vector<int> primes = generate_primes(n);

    for (int i = -n; i <= n; i += 2)
    {
        for (int j = 0; j < primes.size(); j++)
        {
            int result = test(i, primes[j]);

            if (result > best)
            {
                best = result;
                a = i;
                b = primes[j];
            }
        }
    }

    return a * b;
}

int main()
{
    auto total_duration = milliseconds::zero();
    for (int i = 0; i < 1000; i++)
    {
        auto start = high_resolution_clock::now();
        solve(1000);
        auto end = high_resolution_clock::now();
        total_duration += duration_cast<milliseconds>(end - start);
    }
    double avg_duration = static_cast<double>(total_duration.count()) / 1000;
    cout << "Average time taken by function: " << avg_duration << "ms" << endl;

    return 0;
}