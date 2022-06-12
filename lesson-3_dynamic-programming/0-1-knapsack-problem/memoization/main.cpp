#include <iostream>
#include <vector>
#include <fmt/core.h>

int getFav(int i,
           int balance,
           const std::vector<int> &values,
           const std::vector<int> &like,
           std::vector<std::vector<int>> &rec
);

int main() {
    int n, balance;
    std::cin >> n >> balance;

    auto values = std::vector<int>(n);
    auto like = std::vector<int>(n);
    auto rec = std::vector<std::vector<int>>(n);
    for (int i = 0; i < n; i++) {
        std::cin >> values[i] >> like[i];
        rec[i] = std::vector<int>(balance + 1);
    }
    fmt::print("{}\n", getFav(n - 1, balance, values, like, rec));
    return 0;
}

int getFav(
        int i,
        int balance,
        const std::vector<int> &values,
        const std::vector<int> &like,
        std::vector<std::vector<int>> &rec
) {
    if (i == -1 || balance <= 0) {
        return 0;
    }
    if (rec[i][balance] == 0) {
        if (values[i] > balance) {
            rec[i][balance] = getFav(i - 1, balance, values, like, rec);
        } else {
            rec[i][balance] = std::max(
                    getFav(i - 1, balance, values, like, rec),
                    getFav(i - 1, balance - values[i], values, like, rec) + like[i]
            );
        }
    }
    return rec[i][balance];
}
