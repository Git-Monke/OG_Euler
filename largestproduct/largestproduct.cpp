#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;

long substring_product(int *numbers, int start, int length)
{
    long prod = 1;

    for (int i = start; i < start + length; i++)
    {
        prod *= numbers[i];
        cout << numbers[i];
    }
    cout << " " << prod << endl;

    return prod;
}

int main()
{
    const int substr_length = 13;

    // Read contents of input into a string
    // Convert to array of integers by shifting all items in the string by the char code for 0
    ifstream file("input.txt");
    string input((istreambuf_iterator<char>(file)),
                 istreambuf_iterator<char>());

    int input_length = input.length();
    int *nums = new int[input_length];

    for (int i = 0; i < input_length; i++)
    {
        nums[i] = input[i] - '0';
    }

    int sets = input_length - substr_length + 1;
    // Initialize the product of the first 13 items.
    long solution = 0;

    for (int i = 0; i < sets; i++)
    {
        solution = max(solution, substring_product(nums, i, substr_length));
    }

    cout << "Solution: " << solution << endl;

    delete[] nums;
}