#include <iostream>
#include <vector>
#include <fmt/core.h>

int main() {
    int n;
    std::cin >> n;
    auto fibonacci = std::vector<int>(n + 1);
    fibonacci[0] = fibonacci[1] = 1;
    for (int i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    fmt::print("{}\n", fibonacci[n]);
    return 0;
}
