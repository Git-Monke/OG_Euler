#include <iostream>
#include <chrono>

using namespace std;

int d(int n)
{
    int max = n * 0.5;
    int sum = 1;
    int i = 2;

    while (i <= max)
    {
        if (n % i == 0)
        {
            sum += i;
        }

        i++;
    }

    return sum;
}

int main()
{
    int sum = 0;
    int range = 10000;
    int *ds = new int[range];

    auto start = chrono::high_resolution_clock::now();
    for (int i = 0; i < range; i++)
    {
        ds[i] = d(i + 1);
    }

    for (int a = 0; a < range; a++)
    {
        for (int b = a + 1; b < range; b++)
        {
            if (ds[a] == b + 1 && ds[b] == a + 1)
            {
                cout << a + 1 << ", " << b + 1 << endl;
                sum += a + b + 2;
            }
        }
    }

    // This method is almost twice as fast, but the code is uglier.
    // for (int a = 0; a < range; a++)
    // {
    //     for (int b = a + 1; b < range; b++)
    //     {
    //         if (ds[a] == b + 1)
    //         {
    //             if (ds[b] == a + 1)
    //             {
    //                 cout << a + 1 << ", " << b + 1 << endl;
    //                 sum += a + b + 2;
    //             }
    //         }
    //     }
    // }

    auto end = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::milliseconds>(end - start);

    cout
        << sum
        << endl;
    cout << "Call time: " << duration.count() << "ms" << endl;

    delete[] ds;
}