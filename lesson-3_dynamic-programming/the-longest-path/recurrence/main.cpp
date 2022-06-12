#include <iostream>
#include <vector>
#include <fmt/core.h>

int main() {
    int n;
    std::cin >> n;

    auto t = std::vector<std::vector<int>>(n);
    auto theLongest = std::vector<std::vector<int>>(n);
    for (int i = 0; i < n; i++) {
        t[i] = std::vector<int>(i + 1);
        theLongest[i] = std::vector<int>(i + 1);
        for (auto &item: t[i]) {
            std::cin >> item;
        }
    }
    for (int i = 0; i < n; i++) {
        theLongest[n - 1][i] = t[n - 1][i];
    }
    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j < i + 1; j++) {
            theLongest[i][j] = std::max(theLongest[i + 1][j], theLongest[i + 1][j + 1]) + t[i][j];
        }
    }
    fmt::print("{}\n", theLongest[0][0]);
    return 0;
}
