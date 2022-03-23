#include <stdio.h>

int getTheLongest(int[][100], int, int, int);
int max(int, int);

int main(void)
{
    int n;
    scanf("%d", &n);

    int t[100][100];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            scanf("%d", &t[i][j]);
        }
    }
    printf("%d\n", getTheLongest(t, n, 0, 0));
    return 0;
}

int getTheLongest(int t[][100], int n, int i, int j)
{
    if (i == n - 1)
    {
        return t[i][j];
    }
    return max(getTheLongest(t, n, i + 1, j), getTheLongest(t, n, i + 1, j + 1)) + t[i][j];
}

int max(int x, int y)
{
    return x < y ? y : x;
}
