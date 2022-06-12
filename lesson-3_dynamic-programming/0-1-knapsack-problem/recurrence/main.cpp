#include <iostream>
#include <vector>
#include <fmt/core.h>

int main() {
    int n, balance;
    std::cin >> n >> balance;

    auto values = std::vector<int>(n);
    auto like = std::vector<int>(n);
    auto fav = std::vector<int>(balance + 1);
    for (int i = 0; i < n; i++) {
        std::cin >> values[i] >> like[i];
    }
    for (int i = 1; i <= balance; i++) {
        if (values[0] <= i) {
            fav[i] = like[0];
        }
    }
    for (int i = 1; i < n; i++) {
        for (int j = balance; j >= 1; j--) {
            if (values[i] <= j) {
                fav[j] = std::max(fav[j], fav[j - values[i]] + like[i]);
            }
        }
    }
    fmt::print("{}\n", fav[balance]);
    return 0;
}
