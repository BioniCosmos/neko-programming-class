#include <stdio.h>
#include <string.h>

int getTheLongest(int[][100], int, int, int, int[][100]);
int max(int, int);

int main(void)
{
    int n;
    scanf("%d", &n);

    int t[100][100], rec[100][100];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            scanf("%d", &t[i][j]);
        }
    }
    memset(rec, -1, sizeof(rec));
    printf("%d\n", getTheLongest(t, n, 0, 0, rec));
    return 0;
}

int getTheLongest(int t[][100], int n, int i, int j, int rec[][100])
{
    if (i == n - 1)
    {
        return t[i][j];
    }
    if (rec[i][j] == -1)
    {
        rec[i][j] = max(getTheLongest(t, n, i + 1, j, rec), getTheLongest(t, n, i + 1, j + 1, rec)) + t[i][j];
    }
    return rec[i][j];
}

int max(int x, int y)
{
    return x < y ? y : x;
}
