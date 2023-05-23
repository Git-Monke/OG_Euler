#include <iostream>
#include <vector>
#include <chrono>

using namespace std;
using namespace chrono;

void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

void reverse(vector<int> &nums, int start, int end)
{
    int l = start;
    int h = end;
    while (l < h)
    {
        swap(&nums[l], &nums[h]);
        l++;
        h--;
    }
}

void permute(vector<int> &nums)
{
    int l;
    for (l = nums.size() - 2; l >= 0; l--)
    {
        if (nums[l] < nums[l + 1])
        {
            break;
        }
    }

    int h = l + 1;
    for (int i = l + 1; i < nums.size(); i++)
    {
        if (nums[i] < nums[h] && nums[i] > nums[l])
        {
            h = i;
        }
    }

    swap(&nums[l], &nums[h]);
    reverse(nums, l + 1, nums.size() - 1);
}

int main()
{
    const int max = 9;
    const int perm_n = 1000000;

    vector<int> nums;

    // Initialize the digits
    for (int i = 0; i < max + 1; i++)
    {
        nums.push_back(i);
    }

    // Permute n times
    auto start = high_resolution_clock::now();
    for (int i = 0; i < perm_n - 1; i++)
    {
        permute(nums);
    }
    auto end = high_resolution_clock::now();
    auto duration = duration_cast<milliseconds>(end - start);

    // Output result
    for (int i = 0; i < max + 1; i++)
    {
        cout << nums[i];
    }
    cout << endl;
    cout << "Total calculation time: " << duration.count() << "ms";

    return 0;
}