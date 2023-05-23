#include <iostream>
#include <vector>

using namespace std;

int main()
{
    const int power = 10000;
    vector<int> digits;
    digits.push_back(2);

    bool carry = false;

    for (int i = 0; i < power - 1; i++)
    {
        for (int j = 0; j < digits.size(); j++)
        {
            digits[j] *= 2;

            if (carry)
            {
                digits[j]++;
                carry = false;
            }

            if (digits[j] > 9)
            {
                carry = true;
                digits[j] -= 10;
            }

            if (j == digits.size() - 1 && carry)
            {
                digits.push_back(1);
                carry = false;
                break;
            }
        }
    }

    int sum = 0;
    for (int i = digits.size() - 1; i >= 0; i--)
    {
        sum += digits[i];
    }
    cout << sum << endl;
}