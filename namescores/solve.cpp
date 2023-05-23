#include <iostream>
#include <string>
#include <vector>
#include <fstream>

using namespace std;

int score_name(string name)
{
    int score = 0;

    for (int i = 0; i < name.size(); i++)
    {
        score += name[i] - 64;
    }

    return score;
}

void sort(vector<string> &names)
{
    int n = names.size();

    for (int i = 1; i < n; i++)
    {
        int j = i;
        while (j > 0 && names[j - 1] > names[j])
        {
            swap(names[j - 1], names[j]);
            j = j - 1;
        }
    }
}

int main()
{
    // Read and format name contents
    ifstream input("input.txt");

    if (!input.is_open())
    {
        return -1;
    }

    vector<string> names;
    string input_data;
    input >> input_data;

    const char *delim = ",";
    char *ptr;

    ptr = strtok(const_cast<char *>(input_data.c_str()), delim);

    while (ptr != NULL)
    {
        string name = ptr;
        name = name.substr(1, name.size() - 2);
        names.push_back(name);

        ptr = strtok(NULL, delim);
    }

    sort(names);

    long sum = 0;

    for (int i = 0; i < names.size(); i++)
    {
        sum += score_name(names[i]) * (i + 1);
    }

    cout << sum << endl;
}