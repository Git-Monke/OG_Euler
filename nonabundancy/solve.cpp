#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
using namespace chrono;

int sum_of_divisors(int n)
{
    int sum = 0;

    for (int i = 1; i < n; i++)
    {
        if (n % i == 0)
        {
            sum += i;
        }
    }

    return sum;
}

int main()
{
    const int upper_bound = 28123;
    vector<int> abundant_numbers;

    for (int i = 0; i < upper_bound; i++)
    {
        if (sum_of_divisors(i) > i)
        {
            abundant_numbers.push_back(i);
        }
    }

    int sum = 0;
    int size = abundant_numbers.size();
    bool *sieve = new bool[upper_bound + 1];
    fill_n(sieve, upper_bound, true);

    for (int i = 0; i < size; i++)
    {
        for (int j = i; j < size; j++)
        {
            int abundant_sum = abundant_numbers[i] + abundant_numbers[j];
            if (abundant_sum <= upper_bound)
            {
                sieve[abundant_sum] = false;
            }
        }
    }

    for (int i = 0; i <= upper_bound; i++)
    {
        if (sieve[i])
        {
            cout << i << endl;
            sum += i;
        }
    }

    cout << sum << endl;
}