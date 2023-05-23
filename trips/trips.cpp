#include <iostream>
#include <math.h>

using namespace std;

int num_trips(double max)
{
    int trips = 0;
    for (double a = 2; a < max * 0.5; a++)
    {
        double b = (max * (max - 2 * a)) / (2 * (max - a));
        if (b - (int)b == 0)
        {
            if (a > b)
            {
                break;
            }

            trips++;
        }
    }
    return trips;
}

int solve(int ub)
{
    int best_tris = 0;
    int best_value = 0;

    for (int i = 0; i < ub; i += 2)
    {
        int triplets = num_trips(i);
        if (triplets >= best_tris)
        {
            cout << i << ": " << triplets << endl;
            best_tris = triplets;
            best_value = i;
        }
    }

    return best_value;
}

int main()
{
    cout << solve(1000000) << "\n";
}