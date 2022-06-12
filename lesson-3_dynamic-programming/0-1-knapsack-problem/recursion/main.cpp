#include <iostream>
#include <vector>
#include <fmt/core.h>

int getFav(int i, int balance, const std::vector<int> &values, const std::vector<int> &like);

int main() {
    int n, balance;
    std::cin >> n >> balance;

    auto values = std::vector<int>(n);
    auto like = std::vector<int>(n);
    for (int i = 0; i < n; i++) {
        std::cin >> values[i] >> like[i];
    }
    fmt::print("{}\n", getFav(n - 1, balance, values, like));
    return 0;
}

int getFav(int i, int balance, const std::vector<int> &values, const std::vector<int> &like) {
    if (i == -1 || balance <= 0) {
        return 0;
    }
    if (values[i] > balance) {
        return getFav(i - 1, balance, values, like);
    }
    return std::max(
            getFav(i - 1, balance, values, like),
            getFav(i - 1, balance - values[i], values, like) + like[i]
    );
}
