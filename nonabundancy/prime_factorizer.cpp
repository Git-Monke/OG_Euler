#include <iostream>
#include <algorithm>
#include <math.h>
#include <cmath>
#include <vector>

using namespace std;
using namespace chrono;

struct Prime
{
public:
    int value;
    int exponent;

    Prime(int v, int e = 0) : value(v), exponent(e) {}
};

vector<int> generate_primes(int n)
{
    bool *sieve = new bool[n];
    vector<int> primes;

    fill_n(sieve, n, true);

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

void insert_prime(int p, vector<Prime> &primes)
{

    for (int i = 0; i < primes.size(); i++)
    {
        Prime *current_prime = &primes[i];

        if (current_prime->value == p)
        {
            current_prime->exponent++;
            return;
        }
    }

    Prime new_prime(p);
    new_prime.exponent++;
    primes.push_back(new_prime);
}

bool is_prime(int n)
{
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

vector<Prime> factor(int n)
{
    if (is_prime(n))
    {
        vector<Prime> result;
        result.push_back(Prime(n, 1));
        return result;
    }

    vector<int> primes = generate_primes(n / 2 + 1);
    vector<Prime> prime_factors;

    int current = n;

    while (current != 1)
    {
        for (int i = primes.size() - 1; i >= 0; i--)
        {
            int current_prime = primes[i];

            if (current % current_prime == 0)
            {
                insert_prime(current_prime, prime_factors);
                current /= current_prime;
            }
        }
    }

    return prime_factors;
}

int sum_of_divisors(int n)
{
    vector<Prime> prime_factors = factor(n);
    int product = 1;

    for (int i = 0; i < prime_factors.size(); i++)
    {
        Prime *p = &prime_factors[i];
        int v = p->value;
        int e = p->exponent;

        product *= (pow(v, e + 1) - 1) / (v - 1);
    }

    return product;
}