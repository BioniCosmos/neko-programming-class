#include <iostream>
#include <vector>
#include <fmt/core.h>

int getTheLongest(std::vector<std::vector<int>> t, int n, int i, int j);

int main() {
    int n;
    std::cin >> n;

    auto t = std::vector<std::vector<int>>(n);
    for (int i = 0; i < n; i++) {
        t[i] = std::vector<int>(i + 1);
        for (int j = 0; j < i + 1; j++) {
            std::cin >> t[i][j];
        }
    }
    fmt::print("{}", getTheLongest(t, n, 0, 0));
    return 0;
}

int getTheLongest(std::vector<std::vector<int>> t, int n, int i, int j) {
    if (i == n - 1) {
        return t[i][j];
    }

    return std::max(getTheLongest(t, n, i + 1, j), getTheLongest(t, n, i + 1, j + 1)) + t[i][j];
}
