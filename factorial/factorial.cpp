#include <iostream>
#include <vector>

using namespace std;

void multiply(vector<int> &digits, int multipier)
{
    int carry = 0;
    int original_length = digits.size();

    for (int i = 0; i < original_length; i++)
    {
        int *digit = &digits[i];
        *digit *= multipier;
        *digit += carry;

        if (*digit > 9)
        {
            int first_digit = *digit % 10;
            carry = (*digit - first_digit) / 10;
            digits[i] = first_digit;
        }
        else
        {
            carry = 0;
        }
    }

    if (carry != 0)
    {
        while (carry != 0)
        {
            int first_digit = carry % 10;
            carry = (carry - first_digit) / 10;
            digits.push_back(first_digit);
        }
    }
}

int main()
{
    const int factorial = 420;

    vector<int> digits;
    digits.push_back(1);

    for (int i = 2; i <= factorial; i++)
    {
        multiply(digits, i);
    }

    for (int i = digits.size() - 1; i >= 0; i--)
    {
        cout << digits[i];
    }
    cout << endl;
}